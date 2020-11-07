import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity("sample01_post")
export class Post {

    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'id',
    })
    oldId: number;

    @Column({
        nullable: false,
        unique: true,
        length: 38,
        name: 'new_id',
    })
    id: string;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column({ nullable: false })
    likesCount: number;

}
