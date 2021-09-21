interface UserProps{

    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    cpf: string,
    contacto: number,
    isAdmin: boolean

}

class User implements UserProps{
        firstName!: string
        lastName!: string
        username!: string
        email!: string
        password!: string
        cpf!: string
        contacto!: number
        isAdmin!: boolean

    constructor(
        firstName: string,
        lastName: string,
        username: string,
        email: string,
        password: string,
        cpf: string,
        contacto: number,
        isAdmin: boolean){

            this.firstName = firstName
            this.lastName = lastName
            this.username = username
            this.email = email
            this.password = password
            this.cpf = cpf
            this.contacto = contacto
            this.isAdmin = isAdmin
    
        }
        getfirstName(){
            return this.firstName

        }

        setfirstName(firtsName: string){
            this.firstName = firtsName 
        }

        getlastName(){
            return this.lastName

        }

        setlastName(lastName: string){
            this.lastName = lastName
        }

        getusername(){
            return this.username

        }

        setuserame(username: string){
            this.username = username
        }

        getemail(){
            return this.email

        }

        setemail(email: string){
            this.email = email
        }

        getpassword(){
            return this.password

        }

        setpassword(password: string){
            this.password = password
        }

        getcpf(){
            return this.cpf

        }

        setcpf(cpf: string){
            this.cpf = cpf
        }

        getcontacto(){
            return this.contacto

        }

        setcontacto(contacto: number){
            this.contacto = contacto
        }

        getisAdmin(){
            return this.isAdmin

        }

        setisAdmin(isAdmin: boolean){
            this.isAdmin = isAdmin
        }
}

//firtsName,lastName, username, email, password, cpf, contacto e isAdmin.

let usuario = new User("Joaquina", "Lucas", "natalilucs", "natali_l@hotmail.com", "123456", "111.111.111.11", 58974155, true); 

console.log(usuario);

usuario.setlastName('Maionese');

console.log(usuario.getlastName());
