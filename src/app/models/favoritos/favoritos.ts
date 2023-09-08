export class Favoritos {
	id: string;
	userId: string; //Id do usuário
	snackId: string; //Id do lanche a ser salvo

	constructor(userId: string, snackId: string) {
		this.userId = userId;
		this.snackId = snackId;
	}
}
