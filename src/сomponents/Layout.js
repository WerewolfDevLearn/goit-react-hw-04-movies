import PorpTypes from 'prop-types';

import AppHeader from './AppHeader/AppHeader';

const styles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 12,
  paddingLeft: 12,
};

const Layout = ({ children }) => (
  <div style={styles}>
    <AppHeader />
    <hr />
    {children}
  </div>
);

Layout.propTypes = {
  children: PorpTypes.node.isRequired,
};
export default Layout;
