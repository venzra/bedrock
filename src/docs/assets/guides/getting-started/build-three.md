```code
<rock-card>
    <h1>Login</h1>
    <p>Please provide your account credentials to login.</p>

    <form (submit)="performLogin()" [formGroup]="loginForm">
        <rock-input label="Username">
            <input rockInput id="username" type="text" formControlName="username">
            <rock-input-error></rock-input-error>
        </rock-input>

        <rock-input label="Password">
            <input rockInput id="password" type="password" formControlName="password">
            <rock-input-error></rock-input-error>
        </rock-input>

        <button rock-raised-button [disabled]="loginForm.invalid"></button>
    </form>
</rock-card>
```
