import React from 'react'

const MainContent = () => {
    return (
        <main>
            <section className="appointments" id="appointments">
                <h2>Patient Appointments</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Doctor</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                            <td />
                            <td />
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="doctors" id="doctors">
                <h2>Available Doctors</h2>
                <ul>
                    <li />
                    <li />
                    <li />
                </ul>
            </section>
        </main>

    )
}

export default MainContent