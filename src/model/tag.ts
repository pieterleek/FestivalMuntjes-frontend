export class Tag {

    private _id : number
    private _tagUUID : string
    private _tagName : string
    private _secretKey : string
    private _tagValue : string

    public constructor(id : number, tagUUID : string, tagName : string, secretKey : string, tagValue : string) {
        this._id = id
        this._tagUUID = tagUUID
        this._tagName = tagName
        this._secretKey = secretKey
        this._tagValue = tagValue
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get tagUUID(): string {
        return this._tagUUID;
    }

    set tagUUID(value: string) {
        this._tagUUID = value;
    }

    get tagName(): string {
        return this._tagName;
    }

    set tagName(value: string) {
        this._tagName = value;
    }

    get secretKey(): string {
        return this._secretKey;
    }

    set secretKey(value: string) {
        this._secretKey = value;
    }

    get tagValue(): string {
        return this._tagValue;
    }

    set tagValue(value: string) {
        this._tagValue = value;
    }
}