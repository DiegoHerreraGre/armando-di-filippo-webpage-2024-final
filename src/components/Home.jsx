import React from 'react';
import '../App.css'
function Home() {
    const descriptions = {
        'Desarrollo económico y social': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Relaciones Económicas Internacionales': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Integración Regional': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Migraciones y Relaciones Laborales': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Filosofía Económica': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Licenciado en Ciencias Económicas': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Magíster en Ciencias Económicas': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Historia de la economía política y latinoamericana': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
    async function bubleUp (e) {
        e.stopPropagation();
        const title = e.target.textContent;
        const description = descriptions[title];
        const apparitionElements = document.querySelectorAll('.apparition');
        apparitionElements.forEach(el => {
            el.textContent = description;
        });

    }
    async function titleDissapear (e) {
        await bubleUp(e);
        e.stopPropagation();
        e.target.classList.add('dissapear');
    }

    async function titleAppear (e) {
        e.target.classList.remove('dissapear');
        const apparitionElements = document.querySelectorAll('.apparition');
        apparitionElements.forEach(el => {
            el.textContent = '';
        });
    }
    return (
        <section id='home-main'>
            <section id='container-art-list'>
                <ul>
                    <div id='container-div-list'>
                        <div className='container-list'>
                            <li onClick={(e) => {bubleUp(e); titleDissapear(e);}} onMouseLeave={titleAppear}>Desarrollo económico y social</li>
                            <li className='apparition'>Lorem Ipsum oknsdoansfoja</li>
                        </div>
                        <div className='container-list'>
                            <li onClick={(e) => {bubleUp(e); titleDissapear(e);}} onMouseLeave={titleAppear}>Relaciones Económicas Internacionales</li>
                            <li className='apparition'>Lorem Ipsum oknsdoansfoja</li>
                        </div>
                        <div className='container-list'>
                            <li onClick={(e) => {bubleUp(e); titleDissapear(e);}} onMouseLeave={titleAppear}>Integración Regional</li>
                            <li className='apparition'>Lorem Ipsum oknsdoansfoja</li>
                        </div>
                        <div className='container-list'>
                            <li onClick={(e) => {bubleUp(e); titleDissapear(e);}} onMouseLeave={titleAppear}>Migraciones y Relaciones Laborales</li>
                            <li className='apparition'>Lorem Ipsum oknsdoansfoja</li>
                        </div>
                        <div className='container-list'>
                            <li onClick={(e) => {bubleUp(e); titleDissapear(e);}} onMouseLeave={titleAppear}>Filosofía Económica</li>
                            <li className='apparition'>Lorem Ipsum oknsdoansfoja</li>
                        </div>
                        <div className='container-list'>
                            <li onClick={(e) => {bubleUp(e); titleDissapear(e);}} onMouseLeave={titleAppear}>Licenciado en Ciencias Económicas</li>
                            <li className='apparition'>Lorem Ipsum oknsdoansfoja</li>
                        </div>
                        <div className='container-list'>
                            <li onClick={(e) => {bubleUp(e); titleDissapear(e);}} onMouseLeave={titleAppear}>Magíster en Ciencias Económicas</li>
                            <li className='apparition'>Lorem Ipsum oknsdoansfoja</li>
                        </div>
                        <div className='container-list'>
                            <li onClick={(e) => {bubleUp(e); titleDissapear(e);}} onMouseLeave={titleAppear}>Historia de la economía política y latinoamericana</li>
                            <li className='apparition'>Lorem Ipsum oknsdoansfoja</li>
                        </div>
                    </div>
                </ul>
                <div id='universal-desc'>
                    <h4>Profesor invitado en:</h4>
                    <div className='main-positions-universities'>
                        <p>
                            Stanford University, California, Profesor Invitado (Tinker Visiting Professor) año académico
                            septiembre 2004, junio 2005. Casa Bolivar, Latin American Studies. Los cursos dictados
                            fueron: Latin American Development, Latin
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Stanford Overseas Programme (Santiago de Chile), años 2000 a 2007. Cursos dictados: América
                            Latina en la Economía Mundial, y Desarrollo Latinoamericano.
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Institute des Hautes Études de L´Amérique Latine, SORBONNE NOUVELLE, PARIS III, año 2001.
                            Distinguido con la Silla Bolivar, durante el segundo período académico de 2001. Dictado un
                            curso de nivel de doctorado sobre el Pensamiento de CEPAL y su impacto sobre las ciencias
                            sociales de América Latina.
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Instituto de Estudios Internacionales, UNIVERSIDAD DE CHILE, años 2000 a 2007. Dictados
                            múltiples cursos y seminarios sobre temas relacionados con el Desarrollo y las Relaciones
                            Internacionales de América Latina. Actualmente (2007), soy profesor del Curso Economía
                            Política Global, en el Programa de Magíster en Relaciones Internacionales del Instituto.
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Academia Diplomática, Ministerio de Relaciones Exteriores de Chile, Frecuentes
                            colaboraciones académicas.
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Universidad Jesuita Alberto Hurtado, años 2000 hasta la actualidad, Profesor Regular en
                            múltiples asignaturas. Actualmente soy profesor en tres diferentes programas de Magíster.
                        </p>
                    </div>
                </div>
            </section>
            <footer id='home-footer-specific'></footer>
        </section>
    );
}

export default Home;