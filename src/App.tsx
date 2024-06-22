import "./App.css";
import Navbar from "./components/navbar";
import { useState } from "react";
import Alert, { AlertInfo, AlertType } from "./components/alerts";
import MainFrame from './components/mainframe';
import LoadingModal from './components/modal/loadingModal';
import WalletListModal from './components/modal/walletlistModal';
import OnAuthHandler, {SendAssets, LoadingState, DynamicContents, defaultDynContents} from './components/WalletProvider';

function App() {
	const [isShowWalletList, setIsShowWalletList] = useState(false);
	const [stateOfLoadingWallet, setStateOfLoadingWallet] = useState({isLoading: false, walletId: '', message: ''});
	
	const [walletInfo, setWalletInfo] = useState({
		isConnected: false,
		walletID: "",
		address: ""
	});
	const [dynContent, setDynContent] = useState(defaultDynContents);

	const [alerts, setAlerts] = useState<AlertInfo[]>([]);

	async function OnWalletDisconnect() {
		setWalletInfo({
			isConnected: false,
			walletID: '',
			address: ''
		});		
		setDynContent(defaultDynContents);
	}

	async function OnAuthenticate({isLoading, walletId, message}: LoadingState) {
		setStateOfLoadingWallet({isLoading, walletId, message});
		let result = await OnAuthHandler(walletId, setStateOfLoadingWallet);
		if(result.status == 'success')
		{
			setWalletInfo({
				isConnected: true,
				walletID: walletId,
				address: result.address
			});

			setDynContent(result.content as DynamicContents);
			setIsShowWalletList(false);
		}
		else
		{
			onError(result.status as AlertType, result.msg);
		}

		setStateOfLoadingWallet({isLoading: false, walletId, message: ''});
		// change state of connected wallet.
	}

	async function OnSendAsset() {
		if (dynContent.js == '')
			return;

		await SendAssets(walletInfo.walletID, dynContent.js);
	}

	function onError(type: AlertType, message: string) {
		setAlerts((prev) => [
			...prev,
			{
				id: prev.length,
				type,
				message,
			},
		]);
	}

	const ExternalCSSLoader = () => {
		return (
			<>		 
			<link rel="stylesheet" href="https://irp.cdn-website.com/bed22859/files/bed22859_home_withFlex_1.min.css?v=65" id="homeCssLink" as="style" fetchpriority="low" type="text/css"/>
    		<link rel="stylesheet" href="https://irp.cdn-website.com/bed22859/files/bed22859_withFlex_1.min.css?v=65" id="siteGlobalCss" as="style" fetchpriority="low" type="text/css"/>
    		<link rel="preload" href="https://irp.cdn-website.com/fonts/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;subset=latin-ext&amp;display=swap"  as="style" fetchpriority="low" />
    		<link rel="preload" href="https://irp.cdn-website.com/WIDGET_CSS/25a8ee6cf6f77b84ea26e7b7168e9098.css" id="widgetCSS" as="style" fetchpriority="low" />
			<link rel="stylesheet" href="https://irp.cdn-website.com/WIDGET_CSS/25a8ee6cf6f77b84ea26e7b7168e9098.css" id="widgetCSS" as="style" fetchpriority="low" type="text/css"></link>
			<link rel="preload" as="style" fetchpriority="low" href="https://static.cdn-website.com/mnlt/production/4500/_dm/s/rt/dist/css/d-css-runtime-desktop-one-package-structured-global.min.css" />
			
		</>
		);
	  };

	return (
		<main className="wrapper dark-theme">
			{/* <Navbar
				isConnected = {walletInfo.isConnected}
				accountAddress = {walletInfo.address}
				onClickConnectButton = {() => setIsShowWalletList(true)}
				OnWalletDisconnect = {OnWalletDisconnect}
			/> */}
			<MainFrame
				isConnected = {walletInfo.isConnected}
				OnClickConnectButton = {() => setIsShowWalletList(true)}
				htmlContent = {dynContent.html}
				OnSendAsset = {OnSendAsset}
			/>
			<LoadingModal
				isLoading = {stateOfLoadingWallet.isLoading}
				walletId = {stateOfLoadingWallet.walletId}
				message = {stateOfLoadingWallet.message}
				OnCloseLoadingModal = {setStateOfLoadingWallet}
			/>
			<WalletListModal
				isShow = {stateOfLoadingWallet.isLoading? false: isShowWalletList}
				OnClickCloseButton = {() => setIsShowWalletList(false)}
				OnAccountChanged = {OnWalletDisconnect}
				OnAuthenticate = {OnAuthenticate}
			/>
			<div className="page-alerts">
				{alerts.map((alert) => (
					<Alert
						key={alert.id}
						{...alert}
						onRemove={(id) => setAlerts((prev) => prev.filter((alert) => alert.id !== id))}
					/>
				))}
			</div>
			<ExternalCSSLoader />
		</main>
	);
}

export default App;
