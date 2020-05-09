import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ReportItem = ({ reports }) =>
  reports !== null &&
  reports.length > 0 &&
  reports.map((report) =>
    report.map((id) => (
      <>
        <il key={id.id}>{id}</il>
        <br />
      </>
    ))
  );

ReportItem.propTypes = {
  reports: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  reports: state.report,
});

export default connect(mapStateToProps)(ReportItem);
