import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { Item, Label } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statlist}>
        {stats.map(stat => (
          <Item evtType={stat.percentage} key={stat.id}>
            <Label>{stat.label}</Label>
            <Label className={s.percentage}>{stat.percentage}%</Label>
          </Item>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};