import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AuthController } from './auth/auth.controller';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AuthService } from './auth/auth.service';
import { RecruitmentModule } from './recruitment/recruitment.module';
import { TrainsModule } from './trains/trains.module';
import { SeedsModule } from './seeds/seeds.module';
import { LocationModule } from './location/location.module';
import { SchoolModule } from './school/school.module';
import { DepartmentModule } from './department/department.module';
import { EducationModule } from './education/education.module';
import { RecruimentmanypositionsModule } from './recruimentmanypositions/recruimentmanypositions.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { TechnologyModule } from './technology/technology.module';
import { ContractModule } from './contract/contract.module';
import { NomineeModule } from './nominee/nominee.module';
import { PossitionappliedModule } from './possitionapplied/possitionapplied.module';
import { WageModule } from './wage/wage.module';
import { AllowanceModule } from './allowance/allowance.module';
import { BasisalarlistModule } from './basisalarlist/basisalarlist.module';
import { WorkingtimeModule } from './workingtime/workingtime.module';
import { WorkingformModule } from './workingform/workingform.module';
import { PersonalinformationModule } from './personalinformation/personalinformation.module';
import { TypeoftimeModule } from './typeoftime/typeoftime.module';
import { StudytimeModule } from './studytime/studytime.module';
import { RegisterforstudyModule } from './registerforstudy/registerforstudy.module';
import { OpeninscheduleModule } from './openinschedule/openinschedule.module';
import { CourseModule } from './course/course.module';
import { RouteModule } from './route/route.module';
import { RoutetypeModule } from './routetype/routetype.module';
import { LessonModule } from './lesson/lesson.module';
import { PriceModule } from './price/price.module';
import { DiscountModule } from './discount/discount.module';
import { DiscounttypeModule } from './discounttype/discounttype.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRoot({
      // type: 'postgres',
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1d',
      },
    }),
    UsersModule,
    ProductsModule,
    CategoriesModule,
    RecruitmentModule,
    TrainsModule,
    SeedsModule,
    LocationModule,
    SchoolModule,
    DepartmentModule,
    EducationModule,
    RecruimentmanypositionsModule,
    VacanciesModule,
    TechnologyModule,
    ContractModule,
    NomineeModule,
    PossitionappliedModule,
    WageModule,
    AllowanceModule,
    BasisalarlistModule,
    WorkingtimeModule,
    WorkingformModule,
    PersonalinformationModule,
    TypeoftimeModule,
    StudytimeModule,
    RegisterforstudyModule,
    OpeninscheduleModule,
    CourseModule,
    RouteModule,
    RoutetypeModule,
    LessonModule,
    PriceModule,
    DiscountModule,
    DiscounttypeModule,
  ],
  controllers: [
    AppController,
    // AuthController,
  ],
  providers: [
    AppService,
    // AuthService,
  ],
})
export class AppModule {}
