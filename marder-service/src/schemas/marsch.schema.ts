import { Prop, Schema } from '@nestjs/mongoose';
//

//

@Schema()
export class Cat {
  @Prop()
  user_is: string;

  @Prop()
  telephone_number: number;
}

//
