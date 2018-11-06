import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";

class ResponsiveDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { elab, fullScreen, handleClose, inst, open } = this.props;
        return (
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {inst}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {elab}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        autoFocus
                    >
                        close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

ResponsiveDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ResponsiveDialog);
