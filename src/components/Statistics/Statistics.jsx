import PropTypes from 'prop-types';


const Statistics = ({
    title,
    stats
}) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                <li className="item">
                    <span className="label">.docx</span>
                    <span className="percentage">{stats}</span>
                </li>
                <li className="item">
                    <span className="label">.mp3</span>
                    <span className="percentage">{stats}</span>
                </li>
                <li className="item">
                    <span className="label">.pdf</span>
                    <span className="percentage">{stats}</span>
                </li>
                <li className="item">
                    <span className="label">.mp4</span>
                    <span className="percentage">{stats}</span>
                </li>
            </ul>
        </section>
    );
};

export default Statistics;

Statistics.propTypes = { 
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};