import { HouseholdIncomeAmount } from "../../../model/domain/household-income";

export class SupportEstimationRequestDto {
    civility = ''; // TODO: create enum (M, MME) ?
    firstName = '';
    lastName = '';
    email = '';
    phoneNumber = '';
    isOwner = false; // TODO: create enum (OWNER, TENANT) ?
    householdPersonCount = 0;
    householdIncomes = new HouseholdIncomeAmount(0);
    surface = 0;
}