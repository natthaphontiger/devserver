import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({name:'TCNMLog'})
export class Logentity {

    @PrimaryGeneratedColumn()
    FNLogCode:number;

    @Column()
    FTAppCode:string;

    @Column()
    FTMenu:string;

    @Column()
    FTFunction:string;

    @Column()
    FTLogMsg:string;

    @Column()
    FDCreateDate:Date;

    @Column()
    FTStaLog:string;

    @Column()
    FTCompany:string;

}