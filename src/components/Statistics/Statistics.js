import StatisticsItem from './StatisticsItem/StatisticsItem';

export default function Statistics({ stats, title }) {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">
                {stats.map(stat => (
                    <StatisticsItem
                        key={stat.id}
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                ))}
            </ul>
        </section>
    )
}