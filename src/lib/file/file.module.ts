import { Global, Module } from '@nestjs/common';
import { CloudinaryService } from './services/cloudinary.service';
import { FileService } from './services/file.service';
import { MulterService } from './services/multer.service';
import { S3Service } from './services/s3.service';

@Global()
@Module({
  providers: [FileService, S3Service, MulterService, CloudinaryService],
  exports: [FileService, S3Service, MulterService, CloudinaryService],
})
export class FileModule {}
