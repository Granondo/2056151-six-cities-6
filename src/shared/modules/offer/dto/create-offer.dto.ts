import { TypeOfOffer } from '../../../types/index.js';
import { Facilities } from '../../../types/index.js';
import { User } from '../../../types/index.js';

export class CreateOfferDto {
  public name: string;
  public description: string;
  public createdDate: string;
  public city: string;
  public previewImage: string;
  public photos: string;
  public premium: boolean;
  public favourite: boolean;
  public rating: number;
  public type: TypeOfOffer;
  public numberOfRooms: number;
  public numberOfGuests: number;
  public price: number;
  public facilities: Facilities[];
  public authorOfOffer: User[];
  public numberOfComments: number;
  public coordinates: string;
}
