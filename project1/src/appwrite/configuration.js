import config from './config.js';
import {Client,Account,ID, Databases, Storage, Query} from 'appwrite';

export class Service{

    client = new Client();
    databases;
    bucket;

     constructor(){
            this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);
    
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
        }

        async createPost({title,slug,content,featuredImage,status,userid}){
            try {
                return await this.databases.createDocument(
                    config.appwriteDatabaseID,
                    config.appwriteCollectionID,
                    slug,{
                        title,
                        content,
                        featuredImage,
                        status,
                        userid,
                    }
            )
            } catch (error) {
                console.log("appwrite error :: create post :: ",error)
            }
        }

        async updatePost(slug,{title,content,featuredImage,status,userid}){ //slug is document id tbhi alag se likha hai not as object
            try {
                return await this.databases.updateDocument(
                    config.appwriteDatabaseID,
                    config.appwriteCollectionID,
                    slug,{
                        title,
                        content,
                        featuredImage,
                        status,
                    }
                )
            } catch (error) {
                console.log("appwrite error :: update post :: ",error)
            }
        }

        async deletePost(slug){
            try {
                return await this.databases.deleteDocument(
                    config.appwriteDatabaseID,
                    config.appwriteCollectionID,
                    slug
                )
                return true;
            } catch (error) {
                console.log("appwrite error :: delete post :: ",error)
                return false;
            }

        }

        //for single post
        async getPost(slug){
            try {
                return await this.databases.getDocument(
                    config.appwriteDatabaseID,
                    config.appwriteCollectionID,
                    slug
                )
            } catch (error) {
                console.log("appwrite error :: get post :: ",error)
                return false
            }
        }

        //for all/list post that are active(status)
        async getAllPosts(queries=[Query.equal("status", "active")]){
            try {
                return await this.databases.listDocuments(
                    config.appwriteDatabaseID,
                    config.appwriteCollectionID,
                    //[Query.equal("status", "active")]  -> this can be written here too
                    queries
                )
            } catch (error) {
                console.log("appwrite error :: get all posts :: ",error)
                return false
            }
        }

        //file upload services/methods

        async uploadFile(file){
            try {
                return await this.bucket.createFile(
                    config.appwriteBucketID,
                    ID.unique,
                    file
                )
            } catch (error) {
                console.log("appwrite error :: upload file :: ",error)
                return false
            }
        }

        async deleteFile(fileId){
            try {
                return await this.bucket.deleteFile(
                    config.appwriteBucketID,
                    fileId
                )
                return true;
            } catch (error) {
                console.log("appwrite error :: delete file :: ",error)
                return false
            }
        }

        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                config.appwriteBucketID,
                fileId
            )
        }

}

const service = new Service();
export default service