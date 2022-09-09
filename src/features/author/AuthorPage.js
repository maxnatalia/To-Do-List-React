import Section from "../../common/Section";
import Header from "../../common/Header";

const AuthorPage = () => {
    return (
        <>
            <Header title="O autorze" />
            <Section
                title="Natalia Mazur-Żurek"
                body=
                {<>
                    <p> Cześć! Nazywam się <strong>Natalia</strong> i mieszkam od niedawna w Dąbrowie Górniczej
                        z mężem, psem i trzema papugami🐶🦜🐦🐦.
                    </p>
                    <p>
                        Ukończyłam studia - iberystykę, a dokładniej <strong>język hiszpański</strong> w biznesie i turystyce.
                        W swojej pierwszej pracy delikatnie zetknęłam się z programowaniem - co mi się bardzo spodobało,
                        jednak jakoś wtedy nie myślałam o tym na poważnie.
                        Ostatnio się to zmieniło i postanowiłam, że rozpoczynam <strong>naukę programowania!</strong>
                    </p>
                    <p>
                        Poza programowaniem interesuję się również aranżacją wnętrz,
                        lubię też czasami namalować obraz,
                        ale ostatnimi czasy (głównie przez czasy pandemiczne) stałam się... <strong>maniaczką roślinną</strong>🌱🌵🌷🌺.
                    </p>

                </>}
            />
        </>
    )
};

export default AuthorPage;