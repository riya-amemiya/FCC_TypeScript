export class num {
    private num: number;
    constructor(num: number) {
        this.num = num;
    }

    public get get() {
        return this.num;
    }

    public set set(value: number) {
        this.num = value;
    }
    public add(num?: number) {
        num ? (this.num += num) : ++this.num;
    }
    public remove(num?: number) {
        num ? (this.num -= num) : --this.num;
    }
}
