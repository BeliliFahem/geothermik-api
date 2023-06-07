
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { SupportEstimationDto, SupportEstimationRequestDto } from '../../src/model/dto/support-estimation';
import { HouseholdIncomeAmount } from '../../src/model/domain';

describe('SupportController - e2e', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();

        // Pipes for validation. https://docs.nestjs.com/techniques/validation
        app.useGlobalPipes(
            new ValidationPipe({
                transform: true,
            }),
        );

        await app.init();
    });

    it(`/POST support/estimations - empty request payload`, () => {
        const supportEstimationRequestDto = new SupportEstimationRequestDto();

        return request(app.getHttpServer())
            .post('/support/estimations')
            .send(supportEstimationRequestDto)
            .expect(400)
            // TODO: Revoir les messages d'erreurs et faire un test séparé pour chaque cas
            .then((response) => {
                console.log(response.body);
            });
    });

    it(`/POST support/estimations - full good request payload`, () => {
        const supportEstimationRequestDto = new SupportEstimationRequestDto();
        supportEstimationRequestDto.civility = 'M';
        supportEstimationRequestDto.firstName = 'John';
        supportEstimationRequestDto.lastName = 'Doe';
        supportEstimationRequestDto.email = 'test@mail.com';
        supportEstimationRequestDto.phoneNumber = '0123456789';
        supportEstimationRequestDto.isOwner = true;
        supportEstimationRequestDto.householdPersonCount = 2;
        supportEstimationRequestDto.householdIncomes = new HouseholdIncomeAmount(11000);
        supportEstimationRequestDto.surface = 60;

        return request(app.getHttpServer())
            .post('/support/estimations')
            .send(supportEstimationRequestDto)
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(SupportEstimationDto.createEligible(2775));
            });
    });

    it(`/POST support/estimations - householde income amount less than 10000`, () => {
        const supportEstimationRequestDto = new SupportEstimationRequestDto();
        supportEstimationRequestDto.civility = 'M';
        supportEstimationRequestDto.firstName = 'John';
        supportEstimationRequestDto.lastName = 'Doe';
        supportEstimationRequestDto.email = 'test@mail.com';
        supportEstimationRequestDto.phoneNumber = '0123456789';
        supportEstimationRequestDto.isOwner = true;
        supportEstimationRequestDto.householdPersonCount = 2;
        supportEstimationRequestDto.householdIncomes = new HouseholdIncomeAmount(9999);
        supportEstimationRequestDto.surface = 60;

        return request(app.getHttpServer())
            .post('/support/estimations')
            .send(supportEstimationRequestDto)
            .expect(400)
            .then((response) => {
                expect(response.body.message).toContain("householdIncomes.The value must be between 10000 and 100000.");
            });
    });

    afterAll(async () => {
        await app.close();
    });
});
