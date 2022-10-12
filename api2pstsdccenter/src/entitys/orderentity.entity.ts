import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({name:'TCNMOrder'})
export class Orderentity {

    @PrimaryGeneratedColumn()
    FNOrderCode:number;

    @Column()
    FTStaOrder:string;

    @Column()
    FDLastUpdate:Date;

    @Column()
    FTCompany:string;

}