import { Request, Response, } from "express";

import { ContactController } from "../controllers/crmController";

export class Routes {
    private contactCtrl = new ContactController();

    public routes(app: any): void {
        app.route("/")
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    msg: "GET request successfully"
                });
            });

        app.route('/contact')
            .get(this.contactCtrl.getContacts)
            .post(this.contactCtrl.addNewContact);
        app.route('/contact/:contactId')
            .get(this.contactCtrl.getContactWithID);
    }
}
