import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class ValidateCompanyRequestPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value.hasOwnProperty('idCompany')) {
            throw new BadRequestException(`É necessário informar a propriedade idCompany no ${metadata.type} da requisição.`)
        }
        return value;
    }
}