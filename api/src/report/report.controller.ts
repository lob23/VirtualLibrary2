// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';

// DEPRECATED
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAll() {
    return this.reportService.getAll();
  }

  @Get('getReport/:id')
  getReport(@Param('id') id: string) {
    return this.reportService.getReport(id);
  }

  @Post('createReport')
  createReport(@Body() createReportDto: CreateReportDto) {
    return this.reportService.createReport(createReportDto);
  }

  @Delete('deleteReport/:id')
  deleteReport(@Param('id') id: string) {
    this.reportService.deleteReport(id);
  }
}
