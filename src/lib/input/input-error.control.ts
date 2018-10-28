export abstract class RockInputErrorControl {

    abstract triggerError(error: { [key: string]: boolean }): void;

    abstract setValid(): void;

}
