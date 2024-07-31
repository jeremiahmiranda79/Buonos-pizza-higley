const router = require('express').Router();
const { 
	Categories, 
	Dressings, 
	HomePage,
	Hours,
	Images, 
	Information,
	Location,
	MenuItems, 
	Pastas, 
	SaucePasta, 
	SaucesDesert,
	SauceWing, 
	ToppingsColdSub, 
	ToppingsDesert,
	ToppingsHotSub,  
	ToppingsPizza,
	StuffingsCalzone,

	TriviaQuestions,

	TriviaScores
} = require('../../models');

const withAuth = require('../../utils/auth');
const isAdmin = require('../../utils/admin');

//#region /***** CATEGORY ******/
	//Route to create a category
	router.get('/categories/create', withAuth, async (req, res) => {
		try {
			const categories = await Categories.findAll();
			const c = categories.map((x) => x.get({ plain: true }));
			const images = await Images.findAll();
			const i = images.map((img) => img.get({ plain: true }));
			res.status(200).render('create-category', {
				c,
				i,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
	//Route to update a category
	router.get('/categories/update/:catId', withAuth, async (req, res) => {
		try {
			const category = await Categories.findOne({
				where: {
					id: req.params.catId,
				}
			});
			const c = category.get({ plain: true });
			const images = await Images.findAll();
			const i = images.map((img) => img.get({ plain: true }));
			res.status(200).render('update-category', {
				c,
				i,
				loggedIn: req.session.loggedIn,
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
//#endregion
//#region /***** DRESSING ******/
	//Route to create dressing
	router.get('/dressing/create', withAuth, async (req, res) => {
		try {
			const dressing = await Dressings.findAll();
			const d = dressing.map((x) => x.get({ plain: true }));
			res.status(200).render('create-dressing', {
				d,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
	//Route to update dressing
	router.get('/dressing/updateDressing/:dressingID', withAuth, async (req, res) => {
		try {
			const dressing = await Dressings.findOne({
				where: {
					id: req.params.dressingID
				}
			});
			const d = dressing.get({ plain: true })
			res.status(200).render('update-dressing', {
				d,
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		}
	});
//#endregion
//#region /***** HOME ******/
	// Route to find home page
	router.get('/', async (req, res) => {
		try {
			const h = await HomePage.findAll();
			const serializedHomePage = h.map((x) => x.get({ plain: true }));
			const i = await Information.findAll();
			const serializedInfo = i.map((x) => x.get({ plain: true }));

			res.status(200).render('home', {
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
				homePage: serializedHomePage,
				information: serializedInfo
			});
		}	
		catch (error) {
			console.log(error);
			res.status(500).json(error);// 500 - internal server error
		}
	});
//#endregion
//#region /***** MENU ******/
	// Route to find menu
	router.get('/menu-1', async (req, res) => {
		try {
			const c = await Categories.findAll({ include: [{ model: MenuItems }] });	
			const serializedItems = c.map((x) => x.get({ plain: true }));
			const i = await Information.findAll();
			const serializedInfo = i.map((x) => x.get({ plain: true }));
			res.status(200).render('menu', {
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
				items: serializedItems,
				information: serializedInfo
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);// 500 - internal server error
		}
	});
	// Route to find a single menu item
	router.get('/menu/:menuitemsId', async (req, res) => {
		try {
			const i = await MenuItems.findByPk(req.params.menuitemsId, {
				include: [{ model: Categories }]});

			const serializedItem = i.get({ plain: true });
			const t = await Information.findAll();
			const serializedInfo = t.map((x) => x.get({ plain: true }));

			const d = await Dressings.findAll();
			const serializedDressings = d.map((x) => x.get({ plain: true }));
			const p = await Pastas.findAll();
			const serializedPastas = p.map((x) => x.get({ plain: true }));
			const sd = await SaucesDesert.findAll();
			const serializedSaucesDesert = sd.map((x) => x.get({ plain: true })); 
			const sp = await SaucePasta.findAll();
			const serializedSaucePasta = sp.map((x) => x.get({ plain: true }));
			const sw = await SauceWing.findAll();
			const serializedSauceWing = sw.map((x) => x.get({ plain: true })); 
			const tcp = await ToppingsColdSub.findAll();
			const serializedToppingsColdSub = tcp.map((x) => x.get({ plain: true }));
			const td = await ToppingsDesert.findAll();
			const serializedToppingsDesert = td.map((x) => x.get({ plain: true }));
			const ths = await ToppingsHotSub.findAll();
			const serializedToppingsHotSub = ths.map((x) => x.get({ plain: true }));
			const tp = await ToppingsPizza.findAll();	
			const serializedtoppingsPizza = tp.map((x) => x.get({ plain: true }));
			const sc = await StuffingsCalzone.findAll();
			const serializedStuffingsCalzone = sc.map((x) => x.get({ plain: true }));
			res.status(200).render('item-details', {
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
				information: serializedInfo,
				item: serializedItem,
				dressing: serializedDressings,
				pasta: serializedPastas,
				sauceDesert: serializedSaucesDesert,
				saucePasta: serializedSaucePasta,
				sauceWing: serializedSauceWing,
				toppingsColdSub: serializedToppingsColdSub,
				toppingsDesert: serializedToppingsDesert,
				toppingsHotSub: serializedToppingsHotSub,
				toppingsPizza: serializedtoppingsPizza,
				stuffingsCalzone: serializedStuffingsCalzone
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);// 500 - internal server error
		}
	});
	// Route to create a menu item
	router.get('/menuitems/create', withAuth, isAdmin, async (req, res) => {
		try {
			const category = await Categories.findAll();
			const c = category.map((x) => x.get({ plain: true }));
			const menuItems = await MenuItems.findAll();
			const i = menuItems.map((x) => x.get({ plain: true }));
			res.status(200).render('create-menu-item', {
				c, 
				i,
				loggedIn: req.session.loggedIn, 
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);// 500 - internal server error
		};
	});
	// Route to update a menu item
	router.get('/menuitems/update/:menuitemId', withAuth, isAdmin, async (req, res) => {
		try {
			const categories = await Categories.findAll();
			const menuitem = await MenuItems.findOne({
				where: {
					id: req.params.menuitemId,
				}
			});
			const cats = categories.map((cat) => cat.get({ plain: true }));
			const item = menuitem.get({ plain: true });
			res.status(200).render('update-menu-item', {
				item, cats, loggedIn: req.session.loggedIn, name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);// 500 - internal server error
		};
	});
//#endregion
//#region /***** CATERING MENU ******/
	// Route to find menu
	router.get('/specials', async (req, res) => {
		try {
			// const i = await Categories.findAll({ include: [{ model: MenuItems }] });	
			// const serializedItems = i.map((x) => x.get({ plain: true }));
			const i = await Information.findAll();
			const serializedInfo = i.map((x) => x.get({ plain: true }));

			res.status(200).render('catering-menu', {
				loggedIn: req.session.loggedIn, 
				// name: req.session.name,
				// items: serializedItems
				information: serializedInfo
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);// 500 - internal server error
		}
	});

	// Route to find a single menu item
	// router.get('/menu/:menuitemsId', async (req, res) => {
	// 	try {
	// 		const i = await MenuItems.findByPk(req.params.menuitemsId, {
	// 			include: [{ model: Categories }]});
	// 		const serializedItem = i.get({ plain: true });
	// 		const d = await Dressings.findAll();
	// 		const serializedDressings = d.map((x) => x.get({ plain: true }));
	// 		const p = await Pastas.findAll();
	// 		const serializedPastas = p.map((x) => x.get({ plain: true }));
	// 		const sd = await SaucesDesert.findAll();
	// 		const serializedSaucesDesert = sd.map((x) => x.get({ plain: true })); 
	// 		const sp = await SaucePasta.findAll();
	// 		const serializedSaucePasta = sp.map((x) => x.get({ plain: true }));
	// 		const sw = await SauceWing.findAll();
	// 		const serializedSauceWing = sw.map((x) => x.get({ plain: true })); 
	// 		const tcp = await ToppingsColdSub.findAll();
	// 		const serializedToppingsColdSub = tcp.map((x) => x.get({ plain: true }));
	// 		const td = await ToppingsDesert.findAll();
	// 		const serializedToppingsDesert = td.map((x) => x.get({ plain: true }));
	// 		const ths = await ToppingsHotSub.findAll();
	// 		const serializedToppingsHotSub = ths.map((x) => x.get({ plain: true }));
	// 		const tp = await ToppingsPizza.findAll();	
	// 		const serializedtoppingsPizza = tp.map((x) => x.get({ plain: true }));
	// 		res.status(200).render('item-details', {
	// 			loggedIn: req.session.loggedIn, 
	// 			name: req.session.name,
	// 			item: serializedItem,
	// 			dressing: serializedDressings,
	// 			pasta: serializedPastas,
	// 			sauceDesert: serializedSaucesDesert,
	// 			saucePasta: serializedSaucePasta,
	// 			sauceWing: serializedSauceWing,
	// 			toppingsColdSub: serializedToppingsColdSub,
	// 			toppingsDesert: serializedToppingsDesert,
	// 			toppingsHotSub: serializedToppingsHotSub,
	// 			toppingsPizza: serializedtoppingsPizza,
	// 		});
	// 	} 
	// 	catch (error) {
	// 		console.log(error);
	// 		res.status(500).json(error);// 500 - internal server error
	// 	}
	// });
	// Route to create a menu item
	// router.get('/menuitems/create', withAuth, isAdmin, async (req, res) => {
	// 	try {
	// 		const category = await Categories.findAll();
	// 		const c = category.map((x) => x.get({ plain: true }));
	// 		const menuItems = await MenuItems.findAll();
	// 		const i = menuItems.map((x) => x.get({ plain: true }));
	// 		res.status(200).render('create-menu-item', {
	// 			c, 
	// 			i,
	// 			loggedIn: req.session.loggedIn, 
	// 			name: req.session.name
	// 		});
	// 	} 
	// 	catch (error) {
	// 		console.log(error);
	// 		res.status(500).json(error);// 500 - internal server error
	// 	};
	// });
	// Route to update a menu item
	// router.get('/menuitems/update/:menuitemId', withAuth, isAdmin, async (req, res) => {
	// 	try {
	// 		const categories = await Categories.findAll();
	// 		const menuitem = await MenuItems.findOne({
	// 			where: {
	// 				id: req.params.menuitemId,
	// 			}
	// 		});
	// 		const cats = categories.map((cat) => cat.get({ plain: true }));
	// 		const item = menuitem.get({ plain: true });
	// 		res.status(200).render('update-menu-item', {
	// 			item, cats, loggedIn: req.session.loggedIn, name: req.session.name
	// 		});
	// 	} 
	// 	catch (error) {
	// 		console.log(error);
	// 		res.status(500).json(error);// 500 - internal server error
	// 	};
	// });
//#endregion

//#region /***** Oder-Online******/
	router.get('/order-online', async (req, res) => {
		try {
			const h = await HomePage.findAll();
			const serializedHomePage = h.map((x) => x.get({ plain: true }));

			const i = await Information.findAll();
			const serializedInfo = i.map((x) => x.get({ plain: true }));

			res.status(200).render('order-online', {
				homePage: serializedHomePage,

				information: serializedInfo
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	})
//#endregion

//#region /***** LOCATION ******/
	router.get('/location', async (req, res) => {
		try {
			const x = await Hours.findAll();
			const serializedHours = x.map((x) => x.get({plain: true}));
			const i = await Information.findAll();
			const serializedInfo = i.map((x) => x.get({plain: true}));
			const l = await Location.findAll();
			const serializedLocation = l.map((x) => x.get({plain: true}));
			res.status(200).render('location', {
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
				hours: serializedHours,
				information: serializedInfo,
				location: serializedLocation
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	});
//#endregion
//#region /***** HOURS ******/
	router.get('/hours', async (req, res) => {
		try {
			const x = await Hours.findAll();
			const serializedHours = x.map((hour) => hour.get({plain: true}));
			const i = await Information.findAll();
			const serializedInfo = i.map((x) => x.get({ plain: true }));
			res.status(200).render('hours', {
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
				hours: serializedHours,
				information: serializedInfo
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	});
//#endregion
//#region /***** CONTACT ******/
	router.get('/contact-us', async (req, res) => {
		try {
			const x = await Hours.findAll();
			const serializedHours = x.map((hour) => hour.get({plain: true}));
			const info = await Information.findAll();
			const serializedInfo = info.map((info) => info.get({plain: true}));
			res.status(200).render('contact', {
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
				hours: serializedHours,
				information: serializedInfo
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	});
//#endregion
//#region /***** ABOUT ******/
	// Route to find about
	router.get('/about', async (req, res) => {
		try {
			const x = await Hours.findAll();
			const serializedHours = x.map((hour) => hour.get({plain: true}));
			const info = await Information.findAll();
			const serializedInfo = info.map((info) => info.get({plain: true}));
			res.status(200).render('about', {
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
				hours: serializedHours,
				information: serializedInfo
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	});
//#endregion

//#region /***** TRIVIA ******/
	// Route to find trivia
	router.get('/trivia-home-page', async (req, res) => {
		try {
			res.status(200).render('trivia-home-page', {
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	});

	router.get('/trivia-high-scores-page', async (req, res) => {
		try {
			const s = await TriviaScores.findAll({
				order: [
					['score', 'DESC']
				]
			});

			const serializedTriviaScores = s.map((x) => x.get({ plain: true }));

			res.status(200).render('trivia-high-scores-page', {
				score: serializedTriviaScores,
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	});
//#endregion

//#region /***** EMPLOYEE ******/
	//Route to employee login
	router.get('/employee/login', async (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('../');
		}

		try {
			const i = await Information.findAll();
			const serializedInfo = i.map((x) => x.get({ plain: true }));
			res.status(200).render('login', {
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
				information: serializedInfo
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);// 500 - internal server error
		}
	});
//#endregion
//#region /***** INFORMATION ******/
	//Route to update information
	router.get('/information/update/:infoId', withAuth, async (req, res) => {
		try {
			const information = await Information.findOne({
				where: {
					id: req.params.infoId,
				}
			});
			const info = information.get({ plain: true });
			res.status(200).render('update-information', {
				info,
				loggedIn: req.session.loggedIn,
				name: req.session.name,
			});
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
//#endregion
//#region /***** HOME ******/
	//Route to uppdate home
	router.get('/home/update/:homeId', withAuth, async (req, res) => {
		try {
			const home = await HomePage.findOne({
				where: {
					id: req.params.homeId
				}
			});
			const x =	home.get({ plain: true});
			res.status(200).render('update-home', {
				x,
				loggedIn: req.session.loggedIn,
				name: req.session.name,
			})
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
//#endregion
//#region /***** TOPPING PIZZA ******/
	//Route to create topping pizza
	router.get('/pizzaTopping/create', withAuth, async (req, res) => {
		try {
			const toppingsPizza = await ToppingsPizza.findAll();
			const tp = toppingsPizza.map((x) => x.get({ plain: true }));
			res.status(200).render('create-toppings-pizza', {
				tp,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
	//Route to update topping pizza
	router.get('/pizzaTopping/updatePizzaTopping/:pizzaToppingID', withAuth, async (req, res) => {
		try {
			const toppingPizza = await ToppingsPizza.findOne({
				where: {
					id: req.params.pizzaToppingID
				}
			});
			const tp = toppingPizza.get({ plain: true })
			res.status(200).render('update-toppings-pizza', {
				tp,
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		}
	});
//#endregion
//#region /***** SAUCE PASTA ******/
	//Route to update sauce pasta
	router.get('/saucePasta/updateSaucePasta/:saucePastaId', withAuth, async (req, res) => {
		try {
			const saucePasta = await SaucePasta.findOne({
				where: {
					id: req.params.saucePastaId
				}
			});
			const sp = saucePasta.get({ plain: true })
			res.status(200).render('update-sauce-pasta', {
				sp,
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		}
	});
	//Route to create sauce pasta
	router.get('/saucePasta/create', withAuth, async (req, res) => {
		try {
			const saucePasta = await SaucePasta.findAll();
			const sp = saucePasta.map((x) => x.get({ plain: true }));
			res.status(200).render('create-sauce-pasta', {
				sp,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
//#endregion
//#region /***** SAUCE WING ******/
	//Route to create sauce wing
	router.get('/sauceWing/create', withAuth, async (req, res) => {
		try {
			const sauceWing = await SauceWing.findAll();
			const sw = sauceWing.map((x) => x.get({ plain: true }));
			res.status(200).render('create-sauce-wing', {
				sw,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
	//Route to update sauce wing
	router.get('/sauceWing/updateSauceWing/:sauceWingId', withAuth, async (req, res) => {
		try {
			const sauceWing = await SauceWing.findOne({
				where: {
					id: req.params.sauceWingId
				}
			});
			const sw = sauceWing.get({ plain: true })
			res.status(200).render('update-sauce-wing', {
				sw,
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		}
	});
//#endregion
//#region /***** PASTA ******/
	//Route to create pasta
	router.get('/pasta/createPasta', withAuth, async (req, res) => {
		try {
			const pasta = await Pastas.findAll();
			const p = pasta.map((x) => x.get({ plain: true }));
			res.status(200).render('create-pasta', {
				p,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
	//Route to update pasta
	router.get('/pasta/updatePasta/:pastaId', withAuth, async (req, res) => {
		try {
			const pasta = await Pastas.findOne({
				where: {
					id: req.params.pastaId
				}
			});
			const p = pasta.get({ plain: true })
			res.status(200).render('update-pasta', {
				p,
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		}
	});
//#endregion
//#region /***** TOPPING HOT SUB ******/
	//Route to create topping hot sub
	router.get('/toppingHotSub/createToppingHotSub', withAuth, async (req, res) => {
		try {
			const toppingHotSub = await ToppingsHotSub.findAll();
			const ths = toppingHotSub.map((x) => x.get({ plain: true }));
			res.status(200).render('create-topping-hot-sub', {
				ths,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
	//Route to update topping hot sub
	router.get('/toppingHotSub/updateToppingHotSub/:toppingHotSubId', withAuth, async (req, res) => {
		try {
			const toppingHotSub = await ToppingsHotSub.findOne({
				where: {
					id: req.params.toppingHotSubId
				}
			});
			const ths = toppingHotSub.get({ plain: true })
			res.status(200).render('update-topping-hot-sub', {
				ths,
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		}
	});
//#endregion
//#region /***** TOPPING COLD SUB ******/
	//Route to create topping cold sub
	router.get('/toppingColdSub/createToppingColdSub', withAuth, async (req, res) => {
		try {
			const toppingColdSub = await ToppingsColdSub.findAll();
			const tcs = toppingColdSub.map((x) => x.get({ plain: true }));
			res.status(200).render('create-topping-cold-sub', {
				tcs,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
	//Route to update topping cold sub
	router.get('/toppingColdSub/updateToppingColdSub/:toppingColdSubId', withAuth, async (req, res) => {
		try {
			const toppingColdSub = await ToppingsColdSub.findOne({
				where: {
					id: req.params.toppingColdSubId
				}
			});
			const tcs = toppingColdSub.get({ plain: true })
			res.status(200).render('update-topping-cold-sub', {
				tcs,
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		}
	});
//#endregion
//#region /***** TOPPING DESERT ******/
	//Route to create topping desert
	router.get('/toppingDesert/createToppingDesert', withAuth, async (req, res) => {
		try {
			const toppingDesert = await ToppingsDesert.findAll();
			const td = toppingDesert.map((x) => x.get({ plain: true }));
			res.status(200).render('create-topping-desert', {
				td,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
	//Route to update topping desert
	router.get('/toppingDesert/updateToppingDesert/:toppingDesertId', withAuth, async (req, res) => {
		try {
			const toppingDesert = await ToppingsDesert.findOne({
				where: {
					id: req.params.toppingDesertId
				}
			});
			const td = toppingDesert.get({ plain: true })
			res.status(200).render('update-topping-desert', {
				td,
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		}
	});
//#endregion
//#region /***** SAUCE DESERT ******/
	//Route to create sauce desert
	router.get('/sauceDesert/createSauceDesert', withAuth, async (req, res) => {
		try {
			const sauceDesert = await SaucesDesert.findAll();
			const sd = sauceDesert.map((x) => x.get({ plain: true }));
			res.status(200).render('create-sauce-desert', {
				sd,
				loggedIn: req.session.loggedIn,
				name: req.session.name
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		};
	});
	//Route to update sauce desert
	router.get('/sauceDesert/updateSauceDesert/:sauceDesertId', withAuth, async (req, res) => {
		try {
			const sauceDesert = await SaucesDesert.findOne({
				where: {
					id: req.params.sauceDesertId
				}
			});
			const sd = sauceDesert.get({ plain: true })
			res.status(200).render('update-sauce-desert', {
				sd,
				loggedIn: req.session.loggedIn, 
				name: req.session.name,
			});
		} 
		catch (error) {
			console.log(error);
			res.status(500).json(error);//500 - internal server error
		}
	});
//#endregion

module.exports = router;