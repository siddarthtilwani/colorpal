import React, { Component } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from 'react-router-dom';
import './ColorBox.css';
import chroma from 'chroma-js';
import { withStyles } from "@material-ui/core";
import clsx from 'clsx';
import styles from './styles/Colorboxstyles';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopystate = this.changeCopystate.bind(this);
    }

    changeCopystate() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    }

    render() {
        const { name, background, paletteId, id, showingFullPalette, classes, height } = this.props;
        const isDarker = chroma(background).luminance() <= 0.08;
        const isLighter = chroma(background).luminance() >= 0.7;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopystate}>
                <div style={{ background, height }} className={classes.ColorBox}>
                    <div style={{ background }} className={this.state.copied ? "copy-overlay show" : "copy-overlay"} />
                    {/* clsx(classes.copy-overlay,{
                        [classes.show]: this.state.copied, */}
                    {/* }) */}
                    <div className={this.state.copied ? "copy-msg show" : "copy-msg"}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxcontent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copybtn}>Copy</button>
                    </div>
                    {showingFullPalette && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={classes.Morebtn}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);