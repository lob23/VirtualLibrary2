import { User } from 'src/users/entities/user.entity';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { CreateReportDto } from './dto/create-report.dto';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Get functions
  async getAll(): Promise<Report[] | null> {
    return await this.reportRepository.find();
  }

  async getReport(id: string): Promise<Report | null> {
    return await this.reportRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
  }

  // Create function
  async createReport(createReportDto: CreateReportDto): Promise<Report | null> {
    const referenceUser = await this.userRepository.findOne({
      where: { _id: new ObjectId(createReportDto.Report_userId) },
    });

    if (!referenceUser)
      throw new Error(
        'This user is not valid. Current userId: ' +
          createReportDto.Report_userId,
      );

    const newReport = this.reportRepository.create(createReportDto);
    return await this.reportRepository.save(newReport);
  }

  // Delete function
  async deleteReport(id: string): Promise<void> {
    await this.reportRepository.delete(id);
  }
}
