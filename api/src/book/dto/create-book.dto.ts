export class CreateBookDto {
  BDetail_id: string;
  BDetail_title: string;
  BDetail_genre: string;
  BDetail_authorID: string;
  BDetail_averageRating: number;
  BDetail_accepted: boolean;
  BContent_content: Record<string, any>;
}
