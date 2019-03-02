import { SignupService } from "../services/signup.service";

export class SignUp {
    constructor() {
        this._signupService = new SignupService();
    }
    beforeRender() {}
    render() {
        return `
        <div class="auth-wrap d-flex mt-5">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>Sign up to Social.</h3>
                <p class="text-secondary">Enter your data to sign up to your Social account.</p>
                <form name="signupForm" novalidate>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="nickname" placeholder="Nick name">
                        <input type="text" class="form-control form-control-sm mt-3" id="first_name" placeholder="First name">
                        <input type="text" class="form-control form-control-sm mt-3" id="last_name" placeholder="Last name">
                        <input type="tel" class="form-control form-control-sm mt-3" id="phone" placeholder="Phone">
                        <input type="text" class="form-control form-control-sm mt-3" id="gender_orientation" placeholder="Gender">
                        <input type="text" class="form-control form-control-sm mt-3" id="city" placeholder="City">
                        <input type="text" class="form-control form-control-sm mt-3" id="country" placeholder="Country">
                        <input type="number" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="Day of Birthday">
                        <input type="number" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="Month of Birthday">
                        <input type="number" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="Year of Birthday">
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm mt-3">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.auth-form -->
            <div class="auth-bg col col-6">

            </div>
            <!-- /.auth-bg -->
        </div>
        <!-- /.auth-wrap -->
        `;
    }

    afterRender() {

        document.forms['signupForm'].addEventListener('submit', (e) => {
            e.preventDefault();
            const emailAddress = document.getElementById('email').value;
            const pswd = document.getElementById('password').value;
            const nickName = document.getElementById('nickname').value;
            const firstName = document.getElementById('first_name').value;
            const lastName = document.getElementById('last_name').value;
            const tel = document.getElementById('phone').value;
            const genderOrientation = document.getElementById('gender_orientation').value;
            const cityYour = document.getElementById('city').value;
            const countryYour = document.getElementById('country').value;
            const dateOfBirthDay = document.getElementById('date_of_birth_day').value;
            const dateOfBirthMonth = document.getElementById('date_of_birth_month').value;
            const dateOfBirthYear = document.getElementById('date_of_birth_year').value;

            const userInfo = {
                email: emailAddress,
                password: pswd,
                nickname: nickName,
                first_name: firstName,
                last_name: lastName,
                phone:  tel,
                gender_orientation: genderOrientation,
                city: cityYour,
                country: countryYour,
                date_of_birth_day: dateOfBirthDay,
                date_of_birth_month: dateOfBirthMonth,
                date_of_birth_year: dateOfBirthYear
            };

            if (!emailAddress || !pswd || !nickName || !firstName || !lastName || !tel || !genderOrientation || !cityYour || !countryYour || !dateOfBirthDay || !dateOfBirthMonth || !dateOfBirthYear) return console.error('заполните все формы ввода');
            this._signupService.signUp(userInfo)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

}