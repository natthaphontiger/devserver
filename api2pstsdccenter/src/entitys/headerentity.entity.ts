import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity({name:'TCNMHeadderKey'})
export class Headerentity {

    @PrimaryColumn()
    FNHeaderCode:string ;

    @Column()
    FTCompany:string;

}