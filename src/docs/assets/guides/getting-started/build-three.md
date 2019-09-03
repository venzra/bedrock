```code
<rock-card>
    <h1>Login</h1>
    <p>Please provide your account credentials to login.</p>

    <form (submit)="performLogin()" [formGroup]="loginForm">
        <rock-input label="Username" name="username" type="text" formControlName="username">
            <rock-error></rock-error>
        </rock-input>

        <rock-input label="Password" name="password" type="password" formControlName="password">
            <rock-error></rock-error>
        </rock-input>

        <button rock-raised-button [disabled]="loginForm.invalid"></button>
    </form>
</rock-card>
```
