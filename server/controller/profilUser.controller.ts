import { BaseController } from './base.controller';
import { Request , Response } from 'express';
import { statusResponse ,CodeStatut } from '../helper';

export class ProfilUserController extends BaseController{

    async findProfilUser(req:Request , res :Response){
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken?.split(' ')[1];
            const limit = typeof req.query.limit === 'string'?parseInt(req.query.limit):undefined;
            
            const profilUser={
                
            };
            return statusResponse.sendResponseJson(
                CodeStatut.VALID_STATUS,
                res,
                `votre profil à bien été envoyer`,
                profilUser
            )
        } catch (error) {
            return statusResponse.sendResponseJson(
                CodeStatut.SERVER_STATUS,
                res,
                `Erreur au niveau du serveur , réessayer plus tard`,
                error
            )
        }
    }
}