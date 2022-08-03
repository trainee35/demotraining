export class Employee { 
 
   private eno: any = null;
   private  ename: string = "";
    private esal: any = null;
    private eaddress: string = "";

    public getEname(): string {
        return this.ename;
    }

    public setEname(ename: string): void {
        this.ename = ename;
    }

    public getEno(): number {
        return this.eno;
    }

    public setEno(eno: number): void {
        this.eno = eno;
    }

    public getEsal(): number {
        return this.esal;
    }

    public setEsal(esal: number): void {
        this.esal = esal;
    }

    public getEaddress(): string {
        return this.eaddress;
    }

    public setEaddress(eaddress: string): void {
        this.eaddress = eaddress;
    }


}
