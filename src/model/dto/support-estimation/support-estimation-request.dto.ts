import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsPhoneNumber, IsPositive, ValidateNested } from "class-validator";
import { HouseholdIncomeAmount } from "../../../model/domain";
import { Type } from "class-transformer";

export class SupportEstimationRequestDto {

    @IsIn(['M', 'MME'])
    civility: string; // TODO: create enum (M, MME)

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