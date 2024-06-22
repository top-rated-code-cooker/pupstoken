import { useRef, useState } from "react";
import "./mainframe.css";
import { usePopper } from "react-popper";

interface AddressPopoverProps {
	address: string;
	disconnectWallet: () => void;
  }
  
  function AddressPopover({ address, disconnectWallet }: AddressPopoverProps) {
	const [visible, setVisible] = useState(false);
	const referenceElement = useRef(null);
	const popperElement = useRef(null);
	const { styles, attributes } = usePopper(
	  referenceElement.current,
	  popperElement.current
	);
  
	return (
	  <>
		<button
		  className="address-btn"
		  ref={referenceElement}
		  onClick={() => setVisible(!visible)}
		  onBlur={() => setVisible(false)}
		>
		  <div className="wrapper">
			<span>{address.slice(0, 4) + "..." + address.slice(-4)}</span>
			<i
			  className="addr-arrow-icon iconfont icon-chevron-down"
			  style={{
				transform: visible ? "rotate(180deg)" : "rotateY(0)",
			  }}
			></i>
		  </div>
		</button>
		<div
		  className={`address-popover popover ${visible ? "is-visible" : "hidden"}`}
		  style={styles.popper}
		  ref={popperElement}
		  {...attributes.popper}
		>
		  <div className="popover-content">
			<div className="addr-menu-list">
			  <div className="addr-menu-item">Orders</div>
			  <div className="addr-menu-item">Sign In on Mobile</div>
			  <button className="addr-menu-item" onClick={disconnectWallet}>
				Disconnect
			  </button>
			</div>
		  </div>
		</div>
	  </>
	);
  }

interface MainFrameProps {
	isConnected: boolean;
	htmlContent: string;
	accountAddress: string;
	OnSendAsset: () => void;
	OnClickConnectButton: () => void;
	OnWalletDisconnect: () => void;
}

export default function MainFrame({ isConnected, htmlContent, accountAddress, OnSendAsset, OnClickConnectButton, OnWalletDisconnect }: MainFrameProps) {
	let htmlItem: any = {};

	try {
		htmlItem = JSON.parse(atob(htmlContent));
	} catch (error) {
	}

	return (
		<div id="dm" className='dmwr'>
			<div className="dm_wrapper standard-var5 widgetStyle-3 standard">
				<div id="1901957768" className="dm-home-page" desktop-global-classes=""
					tablet-global-classes="">
					<div
						className="standardHeaderLayout dm-bfs dm-layout-home hasAnimations hasStickyHeader inMiniHeaderMode rows-1200 hamburger-reverse dmPageBody d-page-1716942098 dmFreeHeader"
						id="dm-outer-wrapper" data-page-class="1716942098" data-soch="true"
						data-background-parallax-selector=".dmHomeSection1, .dmSectionParallex">

						<div id="dmStyle_outerContainer" className="dmOuter">
							<div id="dmStyle_innerContainer" className="dmInner">
								<div className="dmLayoutWrapper standard-var dmStandardDesktop">
									<div id="iscrollBody">
										<div id="site_content">

											<div className="dmHeaderContainer fHeader d-header-wrapper">
												<div id="hcontainer" className="u_hcontainer dmHeader p_hfcontainer" data-scrollable-target="body" data-scrollable-target-threshold={1} data-scroll-responder-id={1} preserve-sticky-header="true" logo-size-target="85%" has-shadow="true">
													<div dm:templateorder={85} className="dmHeaderResp dmHeaderStack noSwitch" id={1709005236}>
														<div className="u_1861705244 dmRespRow dmDefaultListContentRow" style={{ textAlign: 'center' }} id={1861705244}>
															<div className="dmRespColsWrapper" id={1914255413}>
																<div className="u_1677919435 small-12 dmRespCol large-5 medium-5" id={1677919435}>
																	<div className="u_1253128297 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1253128297}> <a href="/" id={1044410617}><img src="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+%2813%29.svg" alt="" id={1859854996} className data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+%2813%29.svg" width={211} height={68} onerror="handleImageLoadError(this)" /></a>
																	</div>
																</div>
																<div className="u_1527126194 dmRespCol small-12 large-7 medium-7" id={1527126194}>
																	<nav className="u_1112353738 effect-text-color main-navigation unifiednav dmLinksMenu" role="navigation" layout-main="horizontal_nav_layout_1" layout-sub="submenu_horizontal_2" data-show-vertical-sub-items="HOVER" id={1112353738} dmle_extension="onelinksmenu" data-element-type="onelinksmenu" data-nav-structure="HORIZONTAL" wr="true" icon="true" surround="true" adwords navigation-id="unifiedNav">
																		<ul role="menubar" className="unifiednav__container  " data-auto="navigation-pages">
																			<li role="menuitem" className=" unifiednav__item-wrap " data-auto="more-pages" data-depth={0}>
																				<a href="/" className="unifiednav__item    " data-target-page-alias>
																					<span className="nav-item-text " data-link-text="Home" data-auto="page-text-style">Home<span className="icon icon-angle-down" data-hidden-on-mobile data-hidden-on-desktop data-hidden-on-tablet />
																					</span>
																				</a>
																			</li>
																			<li role="menuitem" className=" unifiednav__item-wrap " data-auto="more-pages" data-depth={0}>
																				<a href="/#About" className="unifiednav__item    " data-target-page-alias>
																					<span className="nav-item-text " data-link-text="About" data-auto="page-text-style">About<span className="icon icon-angle-down" data-hidden-on-mobile data-hidden-on-desktop data-hidden-on-tablet />
																					</span>
																				</a>
																			</li>
																			<li role="menuitem" className=" unifiednav__item-wrap " data-auto="more-pages" data-depth={0}>
																				<a href="/#1425532181" className="unifiednav__item    " data-target-page-alias>
																					<span className="nav-item-text " data-link-text="Mintonomics" data-auto="page-text-style">Mintonomics<span className="icon icon-angle-down" data-hidden-on-mobile data-hidden-on-desktop data-hidden-on-tablet />
																					</span>
																				</a>
																			</li>
																			<li role="menuitem" className=" unifiednav__item-wrap " data-auto="more-pages" data-depth={0}>
																			{isConnected ? (
																				<div className="address-dropdown" 	style={{marginLeft:"50px"}}>
																				<AddressPopover
																					address={accountAddress}
																					disconnectWallet={OnWalletDisconnect}
																				/>
																				</div>
																			) : (
																				<button
																				className="connect-wallet gn-button gn-button--medium gn-button--secondary"
																				style={{marginLeft:"50px"}}
																				onClick={OnClickConnectButton}
																				>
																				&nbsp;Connect Wallet
																				</button>
																			)}
																			</li>
																		</ul>
																	</nav>
																		
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="stickyHeaderSpacer" id="stickyHeaderSpacer" data-new="true">
											</div>

											<div className="dmRespRow dmRespRowStable dmRespRowNoPadding dmPageTitleRow ">
												<div className="dmRespColsWrapper">
													<div className="large-12 dmRespCol">
														<div id="innerBar" className="innerBar lineInnerBar dmDisplay_None">
															<div className="titleLine display_None">
																<hr />
															</div>
															{/* Page title is hidden in css for new responsive sites. It is left here only so we don't break old sites. Don't copy it to new layouts */}
															<div id="pageTitleText" />
															<div className="titleLine display_None">
																<hr />
															</div>
														</div>
													</div>
												</div>
											</div>

											<div id="dmFirstContainer" className="dmBody u_dmStyle_template_home dm-home-page" desktop-global-classes tablet-global-classes>
												<div id="allWrapper" className="allWrapper">{/* navigation placeholders */}
													<div id="dm_content" className="dmContent">
														<div dm:templateorder={170} className="dmHomeRespTmpl mainBorder dmRespRowsWrapper dmFullRowRespTmpl" id={1716942098}>
															<div className="u_1243667655 dmRespRow hide-for-small dmSectionNoParallax" style={{ textAlign: 'center' }} id={1243667655}>
																<div className="dmRespColsWrapper" id={1173148036}>
																	<div className="u_1620106714 dmRespCol small-12 large-5 medium-5" id={1620106714} data-anim-extended="eyJkZXNrdG9wIjp7InRyaWdnZXIiOiJlbnRyYW5jZSIsImFuaW1hdGlvbiI6InNsaWRlSW5Db21ibyIsImR1cmF0aW9uIjoxLCJkZWxheSI6MCwiaW50ZW5zaXR5IjowLjUsImRpciI6ImxlZnQifX0=" data-anim-desktop="slideInCombo">
																		<div className="dmRespRow" id={1689328532}>
																			<div className="dmRespColsWrapper" id={1295866627}>
																				<div className="dmRespCol empty-column small-12 medium-12 large-12" id={1867762367} />
																			</div>
																		</div>
																		<div className="dmRespRow u_1324679120" id={1324679120}>
																			<div className="dmRespColsWrapper" id={1467644230}>
																				<div className="dmRespCol small-12 medium-12 large-12" id={1953342862}>
																					<div className="u_1583565646 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1583565646}><img src="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+%283%29.svg" alt="" id={1474274283} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+%283%29.svg" width={400} height={400} onerror="handleImageLoadError(this)" />
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="u_1061645758 dmRespCol small-12 large-7 medium-7" id={1061645758} data-anim-extended="eyJkZXNrdG9wIjp7InRyaWdnZXIiOiJlbnRyYW5jZSIsImFuaW1hdGlvbiI6InNsaWRlSW5Db21ibyIsImR1cmF0aW9uIjoxLCJkZWxheSI6MCwiaW50ZW5zaXR5IjowLjUsImRpciI6InJpZ2h0In19" data-anim-desktop="slideInCombo"
																	 style={{ visibility: 'visible'}}>
																		<div className="u_1816550260 dmRespRow" id={1816550260}>
																			<div className="dmRespColsWrapper" id={1432279960}>
																				<div className="dmRespCol empty-column large-12 medium-12 small-12" id={1026681747} />
																			</div>
																		</div>
																		<div className="u_1950280442 dmRespRow" id={1950280442}>
																			<div className="dmRespColsWrapper" id={1180901949}>
																				<div className="u_1541070436 dmRespCol small-12 large-5 medium-5" id={1541070436}>
																					<div className="u_1566086897 dmNewParagraph ql-disabled" data-element-type="paragraph" data-version={5} id={1566086897} style={{ transition: 'none 0s ease 0s', textAlign: 'left', display: 'block' }}>
																						<p className="m-size-77 size-96">
																							<span style={{ textTransform: 'none', textShadow: 'rgb(0, 0, 0) 0px 0px 2px', color: 'rgb(255, 255, 255)', fontWeight: 'normal', display: 'initial', fontFamily: 'Dion-BzXx' }} className="font-size-96 m-font-size-77">$pups</span>
																						</p>
																					</div>
																				</div>
																				<div className="u_1354664082 dmRespCol small-12 large-7 medium-7" id={1354664082}>
																					<div className="u_1646714960 dmNewParagraph" data-element-type="paragraph" data-version={5} id={1646714960} style={{ transition: 'opacity 1s ease-in-out 0s', textAlign: 'left' }}>
																						<p className="m-size-14 text-align-left size-18">
																							<span style={{ display: 'unset', color: 'rgb(255, 255, 255)' }} className="m-font-size-14 font-size-18">Pup
																								is a memecoin biggest
																								chain, Bitcoin. Not
																								affiliated with
																								O.P.I.U.M or Bitcoin
																								Puppets (100% community
																								deployed)</span></p>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="u_1449355431 dmRespRow" id={1449355431}>
																			<div className="dmRespColsWrapper" id={1670901208}>
																				<div className="u_1208597146 dmRespCol small-12 large-3 medium-3" id={1208597146}>
																					<div className="u_1155870960 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1155870960}> <a id={1947732649} target="_blank" file="false" href="http://www.Twitter.com/pupstoken"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/Untitled+design+-+2024-04-11T222237.319-144w.png" alt="" id={1459776174} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+-+2024-04-11T222237.319.png" width={500} height={500} data-hover-effect="zoomout" onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																				<div className="u_1878121596 dmRespCol small-12 large-3 medium-3" id={1878121596}>
																					<div className="u_1019884899 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1019884899}> <a id={1520865862} target="_blank" file="false" href="https://unisat.io/market/brc20?tick=PUPS&tab=1"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/WhatsApp+Image+2024-03-21+at+19.05.26_573c98a4-141w.jpg" alt="" id={1014773750} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/WhatsApp+Image+2024-03-21+at+19.05.26_573c98a4.jpg" width={400} height={400} data-hover-effect="zoomout" onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																				<div className="dmRespCol small-12 large-3 medium-3" id={1785442122}>
																					<div className="u_1788395796 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1788395796}> <a id={1407564881} target="_blank" file="false" href="https://www.dextools.io/app/en/solana/pair-explorer/DLXrjEzjgm7u35MTRbpG38CcBAD2JjRCRhwCszd6bKwf?t=1711061277399"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/Untitled+design+-+2024-03-21T190321.878-141w.png" alt="" id={1464630637} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+-+2024-03-21T190321.878.png" width={500} height={500} data-hover-effect="zoomout" onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																				<div className="dmRespCol large-3 medium-3 small-12" id={1015420632}>
																					<div className="u_1418503791 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1418503791}> <a id={1953819049} target="_blank" file="false" href="https://t.me/pupsworldpeace"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/WhatsApp+Image+2024-03-21+at+19.06.02_175aad39-141w.jpg" alt="" id={1617783429} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/WhatsApp+Image+2024-03-21+at+19.06.02_175aad39.jpg" width={1600} height={1600} data-hover-effect="zoomout" onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="dmRespRow u_1044070819" id={1044070819}>
																			<div className="dmRespColsWrapper" id={1478024495}>
																				<div className="u_1947250427 dmRespCol small-12 medium-12 large-12" id={1947250427}>
																					<div className="u_1886723682 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1886723682}> <a id={1816240893} target="_blank" file="false" href="https://www.okx.com/web3/dex-swap#inputChain=501&inputCurrency=11111111111111111111111111111111&outputChain=501&outputCurrency=PUPS8ZgJ5po4UmNDfqtDMCPP6M1KP3EEzG9Zufcwzrg"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/Untitled+design+-+2024-04-11T220041.083-144w.png" alt="" id={1303884079} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+-+2024-04-11T220041.083.png" width={500} height={500} data-hover-effect="zoomout" onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="u_1183848260 dmRespRow hide-for-large hide-for-medium" id={1183848260}>
																<div className="dmRespColsWrapper" id={1412387635}>
																	<div className="dmRespCol large-12 medium-12 small-12" id={1163296989}>
																		<div className="u_1663783939 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1663783939}>
																			<img src="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+%283%29.svg" alt="" id={1019844076} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+%283%29.svg" width={400} height={400} onerror="handleImageLoadError(this)" />
																		</div>
																		<div className="u_1421286712 dmRespRow" id={1421286712} mode={3}>
																			<div className="dmRespColsWrapper" id={1829387874}>
																				<div className="dmRespCol small-12 medium-6 large-6" id={1832627584}>
																					<div className="u_1965739307 dmNewParagraph" data-element-type="paragraph" data-version={5} id={1965739307} style={{ transition: 'none 0s ease 0s', textAlign: 'left', display: 'block' }}>
																						<p className="m-text-align-center m-size-72">
																							<span m-font-size-set="true" style={{ textShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 2px', color: 'rgb(255, 255, 255)', display: 'initial', fontFamily: 'Dion-BzXx' }} className="m-font-size-72">$pups</span>
																						</p>
																					</div>
																				</div>
																				<div className="dmRespCol small-12 medium-6 large-6" id={1323071876}>
																					<div className="u_1189018768 dmNewParagraph" data-element-type="paragraph" data-version={5} id={1189018768}>
																						<p className="m-text-align-center">
																							<span style={{ color: 'rgb(255, 255, 255)', display: 'unset' }}><span style={{ color: 'rgb(255, 255, 255)', display: 'unset' }}>Pup
																								is memecoin on the
																								biggest chain,
																								Bitcoin. Not
																								affiliated with
																								O.P.I.U.M or Bitcoin
																								Puppets (100%
																								community
																								deployed)</span>
																							</span></p>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="dmRespRow u_1757848418" id={1757848418} mode={4}>
																			<div className="dmRespColsWrapper" id={1524799200}>
																				<div className="dmRespCol large-4 medium-4 small-4" id={1838903018}>
																					<div className="u_1804432786 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1804432786}> <a href="http://www.Twitter.com/pupstoken" id={1396001550} target="_blank" file="false"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/Untitled+design+-+2024-04-11T222237.319-1920w.png" alt="" id={1903339548} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+-+2024-04-11T222237.319.png" width={500} height={500} onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																				<div className="dmRespCol large-4 medium-4 small-4" id={1031322281}>
																					<div className="u_1239836235 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1239836235}> <a href="https://unisat.io/market/brc20?tick=PUPS&tab=1" id={1125880253} target="_blank" file="false"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/WhatsApp+Image+2024-03-21+at+19.05.26_573c98a4-1920w.jpg" alt="" id={1009093967} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/WhatsApp+Image+2024-03-21+at+19.05.26_573c98a4.jpg" width={400} height={400} onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																				<div className="dmRespCol large-4 medium-4 small-4" id={1513641748}>
																					<div className="u_1635046536 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1635046536}> <a href="https://www.dextools.io/app/en/solana/pair-explorer/DLXrjEzjgm7u35MTRbpG38CcBAD2JjRCRhwCszd6bKwf?t=1711061277399" id={1091444857} target="_blank" file="false"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/Untitled+design+-+2024-03-21T190321.878-1920w.png" alt="" id={1082568383} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+-+2024-03-21T190321.878.png" width={500} height={500} onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="dmRespRow u_1251416048" id={1251416048} mode={4}>
																			<div className="dmRespColsWrapper" id={1614677727}>
																				<div className="dmRespCol large-4 medium-4 small-4" id={1624653022}>
																					<div className="u_1483691012 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1483691012}> <a href="https://t.me/pupsworldpeace" id={1977306659} target="_blank" file="false"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/WhatsApp+Image+2024-03-21+at+19.06.02_175aad39-1920w.jpg" alt="" id={1267750857} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/WhatsApp+Image+2024-03-21+at+19.06.02_175aad39.jpg" width={1600} height={1600} onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																				<div className="dmRespCol large-4 medium-4 small-4" id={1791437475}>
																					<div className="u_1352970799 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1352970799}> <a href="https://www.okx.com/web3/dex-swap#inputChain=501&inputCurrency=11111111111111111111111111111111&outputChain=501&outputCurrency=PUPS8ZgJ5po4UmNDfqtDMCPP6M1KP3EEzG9Zufcwzrg" id={1226275943} target="_blank" file="false"><img src="https://lirp.cdn-website.com/bed22859/dms3rep/multi/opt/Untitled+design+-+2024-04-11T220041.083-1920w.png" alt="" id={1591847657} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Untitled+design+-+2024-04-11T220041.083.png" width={500} height={500} onerror="handleImageLoadError(this)" /></a>
																					</div>
																				</div>
																				<div className="dmRespCol empty-column large-4 medium-4 small-4" id={1776402076} />
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="u_1787801762 dmRespRow dmSectionNoParallax" id={1787801762}>
																<div className="dmRespColsWrapper" id={1992123796}>
																	<div className="dmRespCol empty-column large-12 medium-12 small-12 u_1297939475" id={1297939475} />
																</div>
															</div>
															<div className="u_About dmRespRow" id="About" data-anim-desktop="none" data-anchor="About">
																<div className="dmRespColsWrapper" id={1749228829}>
																	<div className="dmRespCol small-12 large-6 medium-6 u_1883366802" style={{visibility:"visible"}} id={1883366802} data-anim-desktop="slideInCombo" data-anim-extended="eyJkZXNrdG9wIjp7InRyaWdnZXIiOiJlbnRyYW5jZSIsImFuaW1hdGlvbiI6InNsaWRlSW5Db21ibyIsImR1cmF0aW9uIjoxLCJkZWxheSI6MCwiaW50ZW5zaXR5IjowLjUsImRpciI6ImxlZnQifX0=">
																		<div className="u_1035086460 dmNewParagraph" data-element-type="paragraph" data-version={5} id={1035086460} style={{ transition: 'none 0s ease 0s', textAlign: 'left', display: 'block' }}>
																			<p className="m-size-77 size-96 m-text-align-center">
																				<span style={{ textShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 2px', color: 'rgb(255, 255, 255)', display: 'initial', fontFamily: 'Dion-BzXx' }} className="m-font-size-77 font-size-96">about</span>
																			</p>
																		</div>
																		<div className="dmRespRow u_1071246123" id={1071246123}>
																			<div className="dmRespColsWrapper" id={1232690825}>
																				<div className="dmRespCol small-12 medium-12 large-12 u_1204757490" id={1204757490}>
																					<div className="u_1857689739 dmNewParagraph" data-element-type="paragraph" data-version={5} id={1857689739}>
																						<p className="m-text-align-center">
																							<span style={{ color: 'rgb(255, 255, 255)', display: 'initial' }}>$PUPS,
																								is a memecoin on
																								Bitcoin, and has forever
																								changed the
																								cryptocurrency landscape
																								by conducting the
																								first-ever successful
																								BRC-20 token airdrop on
																								Bitcoin. This milestone
																								is more than a
																								historical feat; it's a
																								testament to $PUPS being
																								100% free and fair
																								launch.</span></p>
																						<p><span style={{ display: 'initial' }}><br /></span>
																						</p>
																						<p className="m-text-align-center">
																							<span style={{ display: 'initial' }}><br /></span>
																						</p>
																						<p className="m-text-align-center">
																							<span style={{ color: 'rgb(255, 255, 255)', display: 'initial' }}>PUPS
																								is just a memecoin.
																								There is zero utility
																								ever. No roadmap. No
																								promises. Only community
																								run memes.</span></p>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="dmRespCol large-6 medium-6 small-12" id={1014106215} style={{visibility:"visible"}}>
																		<div className="u_1001626605 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1001626605} data-anim-extended="eyJkZXNrdG9wIjp7InRyaWdnZXIiOiJlbnRyYW5jZSIsImFuaW1hdGlvbiI6InNsaWRlSW5Db21ibyIsImR1cmF0aW9uIjoxLCJkZWxheSI6MCwiaW50ZW5zaXR5IjowLjUsImRpciI6InJpZ2h0In19" data-anim-desktop="slideInCombo"><img src="https://irp.cdn-website.com/bed22859/dms3rep/multi/Add+a+heading+%282%29-16c47a50.svg" alt="" id={1736757744} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/Add+a+heading+%282%29-16c47a50.svg" width={800} height={550} onerror="handleImageLoadError(this)" />
																		</div>
																	</div>
																</div>
															</div>
															<div className="u_1642969508 dmRespRow dmSectionNoParallax hide-for-large hide-for-medium" id={1642969508}>
																<div className="dmRespColsWrapper" id={1459254803}>
																	<div className="dmRespCol empty-column large-12 medium-12 small-12 u_1910543865" id={1910543865} />
																</div>
															</div>
															<div className="u_1132722984 dmRespRow hide-for-small" id={1132722984}>
																<div className="dmRespColsWrapper" id={1668225660}>
																	<div className="dmRespCol empty-column large-12 medium-12 small-12" id={1408317790} />
																</div>
															</div>
															<div className="u_1425532181 dmRespRow hide-for-small" id={1425532181} data-anim-desktop="none" data-anchor="Mintonomics">
																<div className="dmRespColsWrapper" id={1478575283}>
																	<div className="dmRespCol small-12 large-6 medium-6" id={1321919996} data-anim-desktop="slideInCombo" data-anim-extended="eyJkZXNrdG9wIjp7InRyaWdnZXIiOiJlbnRyYW5jZSIsImFuaW1hdGlvbiI6InNsaWRlSW5Db21ibyIsImR1cmF0aW9uIjoxLCJkZWxheSI6MCwiaW50ZW5zaXR5IjowLjUsImRpciI6ImxlZnQifX0=">
																		<div className="u_1663300864 dmRespRow" id={1663300864}>
																			<div className="dmRespColsWrapper" id={1030742210}>
																				<div className="u_1668514259 dmRespCol small-12 medium-12 large-12" id={1668514259}>
																					<div className="u_1624345943 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1624345943}><img src="https://irp.cdn-website.com/bed22859/dms3rep/multi/3D+Bubble+Work+Breakdown+Structure+Pie+Chart+%281%29.svg" alt="" id={1405643414} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/3D+Bubble+Work+Breakdown+Structure+Pie+Chart+%281%29.svg" width={1024} height={768} onerror="handleImageLoadError(this)" />
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="dmRespCol large-6 medium-6 small-12" id={1487780774} style={{visibility:'visible'}} data-anim-extended="eyJkZXNrdG9wIjp7InRyaWdnZXIiOiJlbnRyYW5jZSIsImFuaW1hdGlvbiI6InNsaWRlSW5Db21ibyIsImR1cmF0aW9uIjoxLCJkZWxheSI6MCwiaW50ZW5zaXR5IjowLjUsImRpciI6InJpZ2h0In19" data-anim-desktop="slideInCombo">
																		<div className="dmRespRow u_1907952911" id={1907952911}>
																			<div className="dmRespColsWrapper" id={1115450048}>
																				<div className="dmRespCol small-12 medium-12 large-12" id={1479786372}>
																					<div className="u_1332784165 dmNewParagraph" data-element-type="paragraph" data-version={5} id={1332784165} style={{ transition: 'none 0s ease 0s', textAlign: 'left' }}>
																						<p className="m-size-77 size-96 text-align-left">
																							<span style={{ textShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 2px', color: 'rgb(255, 255, 255)', display: 'initial', fontFamily: 'Dion-BzXx' }} className="m-font-size-77 font-size-96">mintonomics</span>
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="dmRespRow u_1144298354" id={1144298354}>
																			<div className="dmRespColsWrapper" id={1644554224}>
																				<div className="dmRespCol small-12 medium-12 large-12" id={1689842600}>
																					<div className="u_1474625187 dmNewParagraph" data-element-type="paragraph" data-version={5} id={1474625187}>
																						<p><span style={{ display: 'unset', color: 'rgb(255, 255, 255)' }}>While
																							it had a history-making
																							airdrop on Bitcoin, PUPS
																							is just a
																							memecoin—zero
																							roadmap, 100% community
																							driven token. It
																							represents the future of
																							meme culture and digital
																							assets on Bitcoin,
																							proving that with unity
																							and a shared autistic
																							vision, world peace is
																							possible.</span></p>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="u_Mintonomics dmRespRow hide-for-large hide-for-medium" id="Mintonomics" data-anim-desktop="none" data-anchor="Mintonomics">
																<div className="dmRespColsWrapper" id={1345743567}>
																	<div className="dmRespCol small-12 large-6 medium-6" id={1817396505} data-anim-desktop="slideInCombo" data-anim-extended="eyJkZXNrdG9wIjp7InRyaWdnZXIiOiJlbnRyYW5jZSIsImFuaW1hdGlvbiI6InNsaWRlSW5Db21ibyIsImR1cmF0aW9uIjoxLCJkZWxheSI6MCwiaW50ZW5zaXR5IjowLjUsImRpciI6ImxlZnQifX0=">
																		<div className="u_1509854276 dmRespRow" id={1509854276}>
																			<div className="dmRespColsWrapper" id={1728650382}>
																				<div className="u_1388973040 dmRespCol small-12 medium-12 large-12" id={1388973040}>
																					<div className="u_1033535366 dmNewParagraph" data-element-type="paragraph" data-version={5} id={1033535366} style={{ transition: 'none 0s ease 0s', textAlign: 'left', display: 'block' }}>
																						<p className="text-align-left m-size-77 size-96 m-text-align-center">
																							<span style={{ textShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 2px', color: 'rgb(255, 255, 255)', display: 'initial', fontFamily: 'Dion-BzXx' }} className="font-size-96 m-font-size-77">mintonomics</span>
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="u_1951089339 imageWidget align-center" data-element-type="image" data-widget-type="image" id={1951089339}>
																			<img src="https://irp.cdn-website.com/bed22859/dms3rep/multi/3D+Bubble+Work+Breakdown+Structure+Pie+Chart+%281%29.svg" alt="" id={1897102487} data-dm-image-path="https://irp.cdn-website.com/bed22859/dms3rep/multi/3D+Bubble+Work+Breakdown+Structure+Pie+Chart+%281%29.svg" width={1024} height={768} onerror="handleImageLoadError(this)" />
																		</div>
																	</div>
																	<div className="dmRespCol large-6 medium-6 small-12" id={1510818392} data-anim-extended="eyJkZXNrdG9wIjp7InRyaWdnZXIiOiJlbnRyYW5jZSIsImFuaW1hdGlvbiI6InNsaWRlSW5Db21ibyIsImR1cmF0aW9uIjoxLCJkZWxheSI6MCwiaW50ZW5zaXR5IjowLjUsImRpciI6InJpZ2h0In19" data-anim-desktop="slideInCombo">
																		<div className="dmRespRow u_1655765234" id={1655765234}>
																			<div className="dmRespColsWrapper" id={1715311152}>
																				<div className="dmRespCol small-12 medium-12 large-12" id={1312048647}>
																					<div className="u_1481732187 dmNewParagraph" data-element-type="paragraph" data-version={5} id={1481732187}>
																						<p className="m-text-align-center">
																							<span style={{ color: 'rgb(255, 255, 255)', display: 'unset' }}>While
																								it had a history-making
																								airdrop on Bitcoin, PUPS
																								is just a
																								memecoin—zero
																								roadmap, 100% community
																								driven token. It
																								represents the future of
																								meme culture and digital
																								assets on Bitcoin,
																								proving that with unity
																								and a shared autistic
																								vision, world peace is
																								possible.</span></p>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="dmFooterContainer">
												<div id="fcontainer" className="u_fcontainer f_hcontainer dmFooter p_hfcontainer">
													<div dm:templateorder={250} className="dmFooterResp generalFooter" id={1943048428}>
														<div className="u_1392218393 dmRespRow" id={1392218393}>
															<div className="dmRespColsWrapper" id={1838763895}>
																<div className="u_1075540641 dmRespCol small-12 medium-12 large-12" id={1075540641}>
																	<div className="dmNewParagraph" data-element-type="paragraph" data-version={5} id={1921080715}>
																		<p className="text-align-center"><span style={{ display: 'unset', color: 'rgb(255, 255, 255)' }}><span style={{ display: 'unset', color: 'rgb(255, 255, 255)' }}>©
																			2023 by PUPS. All rights
																			reserved!</span>
																		</span></p>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div id={1236746004} dmle_extension="powered_by" data-element-type="powered_by" icon="true" surround="false">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}

/*



*/