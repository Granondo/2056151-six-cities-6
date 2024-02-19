import { CreateOfferDto, UpdateOfferDto } from './dto/index.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';

export interface OfferService {
    create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
    findById(offerId: string): Promise<DocumentType<OfferEntity> | null>
    find(): Promise<DocumentType<OfferEntity>[]>;
    deleteById(offerId:string): Promise<DocumentType<OfferEntity>| null>
    updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
    incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
    findNew(count: number): Promise<DocumentType<OfferEntity>[]>;
    findDiscussed(count: number): Promise<DocumentType<OfferEntity>[]>;
    exists(documentId: string): Promise<boolean>;
}
