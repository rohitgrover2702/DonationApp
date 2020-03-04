export interface IMembershipModel {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    isDeleted?: boolean;
    isDeactivated?: boolean;
    token?: string;
}
