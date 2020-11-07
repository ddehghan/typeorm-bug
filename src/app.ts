import "reflect-metadata";
import {ConnectionOptions, createConnection} from "typeorm";
import {Post} from "./entity/Post";
import {v4 as uuidv4} from 'uuid';

const options: ConnectionOptions = {
    "name": "test",
    "type": "postgres",
    "host": "localhost",
    "port": 5440,
    // "port": 5432,
    "username": "dm-guest",
    "password": "dm-guest",
    "database": "test",
    "logging": false,
    synchronize: true,
    entities: [Post]
};

createConnection(options).then(async connection => {

    const id = uuidv4();

    let post = new Post();
    post.text = "Hello how are you?";
    post.title = "hello";
    post.id = id;
    post.likesCount = 100;

    let postRepository = connection.getRepository(Post);

    await postRepository        .save(post);
    console.log("Post has been saved: ", post)

    const r = await postRepository.findOne({
        where: {id},
    });

    console.log(r)

}, error => console.log("Cannot connect: ", error));
