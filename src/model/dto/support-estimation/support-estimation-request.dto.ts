import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsPositive, ValidateNested } from "class-validator";
import { Civility, HouseholdIncomeAmount } from "../../../model/domain";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class SupportEstimationRequestDto {

    @IsEnum(Civility)
    @ApiProperty({ enumName: "Civility", enum: [Civility.M, Civility.Mme] })
    civility: Civility;

    @IsNotEmpty()
    firstName: string;
    
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('FR')
    phoneNumber: string;

    @IsBoolean()
    isOwner: boolean; // TODO: create enum (OWNER, TENANT) ?

    @IsPositive()
    householdPersonCount: number;
    
    @ValidateNested()
    @Type(() => HouseholdIncomeAmount)
    @IsNotEmpty()
    householdIncomes: HouseholdIncomeAmount;

    @IsPositive()
    surface: number;
}