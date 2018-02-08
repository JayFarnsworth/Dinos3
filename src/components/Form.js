import React from 'react';

export default function Form({handleSubmit, listings, expand, expanded, previewText}) {
    return (
        <main>
            <section id="job-details">
                <h2>Job Details</h2>
            </section>
            <form id="application-input" onSubmit={handleSubmit}>
                <label>Apply Here: </label>
                <textarea id="application-text" rows="8" cols="100" name='inputdata' ></textarea>
                <input id="submit" type="submit" value="Submit" />
            </form>
            <p id="message">&nbsp;</p>
        </main>
    );

}