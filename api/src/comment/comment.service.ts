import { User } from 'src/users/entities/user.entity';
import { BDetail } from 'src/book/entities/bdetail.entity';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ObjectId } from 'mongodb';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(BDetail)
    private readonly bDetailRepository: Repository<BDetail>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  // Get functions
  async getCommentOfBook(bookId: string): Promise<Comment[] | null> {
    const commentList = await this.commentRepository.find({
      where: {
        Comment_bookId: bookId,
        Comment_nestedId: null,
      },
    });
    const result = commentList.sort(
      (a, b) => a.Comment_time.getTime() - b.Comment_time.getTime(),
    );
    return result;
  }

  // eslint-disable-next-line prettier/prettier
  async getNestedCommentOfComment(commentId: string): Promise<Comment[] | null> {
    const commentList = await this.commentRepository.find({
      where: {
        Comment_nestedId: commentId,
      },
    });
    const result = commentList.sort(
      (a, b) => a.Comment_time.getTime() - b.Comment_time.getTime(),
    );
    return result;
  }

  // Create function
  // eslint-disable-next-line prettier/prettier
  async createComment(createCommentDto: CreateCommentDto): Promise<Comment | null> {
    // Check whether the user is exist or not
    const existingUser = await this.userRepository.findOne({
      where: { _id: new ObjectId(createCommentDto.Comment_userId) },
    });

    if (!existingUser) throw new Error('This user does not exist');

    // Check whether the book is valid
    const bDetail = await this.bDetailRepository.findOne({
      where: { _id: new ObjectId(createCommentDto.Comment_bookId) },
    });

    if (!bDetail) throw new Error('This book does not exist');

    if (createCommentDto.Comment_nestedId) {
      // Check whether nested comment is valid
      const nestComment = await this.commentRepository.findOne({
        where: { _id: new ObjectId(createCommentDto.Comment_nestedId) },
      });

      if (!nestComment)
        throw new Error(
          'This nested comment is invalid. Current nestedId: ' +
            createCommentDto.Comment_nestedId,
        );
    }

    const newComment = this.commentRepository.create({
      ...createCommentDto,
      Comment_time: new Date(),
    });
    return await this.commentRepository.save(newComment);
  }

  // Update function
  async updateContent(
    id: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment | null> {
    await this.commentRepository.update(id, {
      ...updateCommentDto,
      Comment_time: new Date(),
    });

    return await this.commentRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  // Delete functions
  async deleteComment(commentId: string): Promise<void> {
    const commentList = await this.getNestedCommentOfComment(commentId);
    for (const comment of commentList)
      await this.deleteComment(comment._id.toString());

    await this.commentRepository.delete(commentId);
  }
}
