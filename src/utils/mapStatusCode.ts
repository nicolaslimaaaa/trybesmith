import { ServiceResponseStatus } from '../types/ServiceResponse';

const statusCode: Record<ServiceResponseStatus, number> = {
  SUCCESSFUL: 200,
  CREATED: 201,
};

const mapStatusCode = (code: ServiceResponseStatus): number => statusCode[code] || 500;

export default mapStatusCode;