export class Person {
    // name is a private member variable
    public constructor(private name: string) {}

    public getName(): string {
      return this.name;
    }
}