import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `
      .login-register {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 100%;
        width: 100%;
        padding: 10% 0;
        position: fixed;
      }
      .login-box {
        margin: 0 auto; /*  */
        width: 100%;
      }

      @media (min-width: 768px) {
        .login-box {
          width: 400px;
        }
      }
      .login-box .footer {
        width: 100%;
        left: 0px;
        right: 0px;
      }
      .login-box .social {
        display: block;
        margin-bottom: 30px;
      }

      #recoverform {
        display: none;
      }

      .login-sidebar {
        padding: 0px;
        margin-top: 0px;
      }
      .login-sidebar .login-box {
        right: 0px;
        position: absolute;
        height: 100%;
      }
    `,
  ],
})
export class RegisterComponent {}
