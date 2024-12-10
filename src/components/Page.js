import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// @mui
import { Box,Modal } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({children, title = '', meta, ...other }, ref) => (
  <>
    <Head>
      <title >{`${title} | Web Permits`}</title>
      {meta}
    </Head>
    <Box ref={ref} {...other}>
      {children}
    </Box>
    <Modal
          open={other?.isOpenModal ? other.isOpenModal : false}
          onClose={other?.onCloseModal ? other.onCloseModal: ()=>{}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        {other?.childrenModalData ? other.childrenModalData() : <div></div>}
    </Modal>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
