import StatisticsItem from './StatisticsItem/StatisticsItem';
import s from './Statistics.module.css'

export default function Statistics({ stats, title="Upload stats" }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
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