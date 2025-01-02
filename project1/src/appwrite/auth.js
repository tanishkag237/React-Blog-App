import config from '../config/config';
import {Client,Account,ID} from 'appwrite';

export class AuthService{
    client = new Client();
    account ;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectID);

        this.account = new Account(this.client); //done inside constructor 
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique,email,password,name);
            if(userAccount){
                //call another method
                this.login({email,password}) //if useracc exists , then directly login
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            const userLogin = await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log("appwrite error : ",error) 
        }
        return null;
    }

    async getCurrentUser(){
        try {
            return await this.account.get(); 
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService(); //object

export default authService;