dialogues.firstConversation =
{
	"actors": [
		{
			"id": 10,
			"name": "我"
		},
		{
			"id": 20,
			"name": "医生"
		}
	],
	"dialogues": [
		{
			"id": 10,
			"parent": null,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "很好，你醒了。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				20
			]
		},
		{
			"id": 20,
			"parent": 10,
			"isChoice": true,
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				30,
				40,
				47,
				50,
				60,
				70,
				100
			]
		},
		{
			"id": 30,
			"parent": 20,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "我是谁？",
			"dialogueText": "我是谁？",
			"conditionsString": "!this.rememberName",
			"codeBefore": "",
			"codeAfter": "this.rememberName=true",
			"outgoingLinks": [
				31
			]
		},
		{
			"id": 31,
			"parent": 30,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "看来你的记忆还没有恢复。静下心，呼～吸～呼～吸～，怎么样想起来了么？",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				32
			]
		},
		{
			"id": 32,
			"parent": 31,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "",
			"dialogueText": "静下心，呼～吸～呼～吸～，还是没想起来～",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				33
			]
		},
		{
			"id": 33,
			"parent": 32,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "情况糟糕了，让我看一下你的脑颞叶，对了，我的携带式激光切割器放在哪个口袋来着……",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				34
			]
		},
		{
			"id": 34,
			"parent": 33,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "",
			"dialogueText": "您别忙，我想起来了，我叫XXX",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				20
			]
		},
		{
			"id": 40,
			"parent": 20,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "我在哪里？",
			"dialogueText": "我在哪里？",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				41
			]
		},
		{
			"id": 41,
			"parent": 40,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "在医院里，当然喽",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				42
			]
		},
		{
			"id": 42,
			"parent": 40,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "",
			"dialogueText": "可我记得我之前还在电脑前上网……",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				43
			]
		},
		{
			"id": 43,
			"parent": 41,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "让我查一下，你是在2023年2月28日晚上十点二十五分因汉堡流感造成的休克而送进医院的。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				44
			]
		},
		{
			"id": 44,
			"parent": 43,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "",
			"dialogueText": "汉堡流感是什么玩意儿？",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				45
			]
		},
		{
			"id": 45,
			"parent": 44,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "汉堡流感是什么玩意儿？",
			"dialogueText": "汉堡流感原本是一种只在汉堡之间传播的流感，主要症状是变得冰冷和僵硬。根据记录，你是第一例受到变异的汉堡流感感染而进医院的人类，然后你就被冰冻起来，直到现在才被我弄醒。放心，你身上的病毒都清除了。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "this.canAskFroze = true",
			"outgoingLinks": [
				20
			]
		},
		{
			"id": 47,
			"parent": 20,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "你是谁？",
			"dialogueText": "你是谁？",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				48
			]
		},
		{
			"id": 48,
			"parent": 47,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "你是谁？",
			"dialogueText": "我是你的主治医生吴奔图，你可以叫我吴大恩人。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				49
			]
		},
		{
			"id": 49,
			"parent": 48,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "",
			"dialogueText": "额～我还是叫你吴医生吧。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				491
			]
		},
		{
			"id": 491,
			"parent": 49,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "太小气了吧，我可是救了你的命啊。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				20
			]
		},
		{
			"id": 50,
			"parent": 20,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "天啊，冰冻？",
			"dialogueText": "什么？我被冰冻起来？怎么可能？为什么？多久了？现在是什么时候？",
			"conditionsString": "this.canAskFroze && !this.canAskDetail",
			"codeBefore": "",
			"codeAfter": "this.canAskDetail=true",
			"outgoingLinks": [
				51
			]
		},
		{
			"id": 51,
			"parent": 50,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "哈，别着急～别着急，一点点来。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				20
			]
		},
		{
			"id": 60,
			"parent": 20,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "为什么把我冰冻起来？",
			"dialogueText": "为什么把我冰冻起来？",
			"conditionsString": "this.canAskDetail",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				61
			]
		},
		{
			"id": 61,
			"parent": 60,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "为什么把我冰冻起来？",
			"dialogueText": "汉堡流感在当时可是绝症啊，死了几千万人，你本来也在其中。不过，因为你是第一例病人，所以被博物馆冰冻起来作为纪念展出。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				20
			]
		},
		{
			"id": 70,
			"parent": 20,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "我被冰冻了多久了？",
			"dialogueText": "我被冰冻了多久了",
			"conditionsString": "this.canAskDetail",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				71
			]
		},
		{
			"id": 71,
			"parent": 70,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "今天是2123年2月30日，所以你已经被冰冻了差不多100年了吧。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				710
			]
		},
		{
			"id": 72,
			"parent": 710,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "一百年？",
			"dialogueText": "天啊！一百年？！",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				73
			]
		},
		{
			"id": 73,
			"parent": 72,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "你活着，穿越到了未来，还毫发无伤，多完美的开始啊！",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "this.canLeave=true",
			"outgoingLinks": [
				20
			]
		},
		{
			"id": 75,
			"parent": 710,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "30日？",
			"dialogueText": "且慢，2月哪来的30天？",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				76
			]
		},
		{
			"id": 76,
			"parent": 75,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "你来自古代，不知道现在的历法是每月30天，一年12个月，360天，完美的周期。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				77
			]
		},
		{
			"id": 77,
			"parent": 76,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "",
			"dialogueText": "那么每一年里剩下的5或6天呢？",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				78
			]
		},
		{
			"id": 78,
			"parent": 77,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "你说的是选秀日，本季的选秀日还有一个月时间才到。",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				79
			]
		},
		{
			"id": 79,
			"parent": 78,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "",
			"dialogueText": "什么是选秀日？",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				80
			]
		},
		{
			"id": 80,
			"parent": 79,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "",
			"dialogueText": "到时候你就知道了",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				20
			]
		},
		{
			"id": 100,
			"parent": 20,
			"isChoice": false,
			"actor": 20,
			"conversant": 10,
			"menuText": "还有什么我该知道的？",
			"dialogueText": "你可以去问问那边的胡小姐，毕竟是她让我把你救活的",
			"conditionsString": "this.canLeave==true&&this.rememberName==true",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				101
			]
		},
		{
			"id": 101,
			"parent": 100,
			"isChoice": false,
			"actor": 10,
			"conversant": 20,
			"menuText": "",
			"dialogueText": "好吧～",
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": []
		},
		{
			"id": 710,
			"parent": 70,
			"isChoice": true,
			"conditionsString": "",
			"codeBefore": "",
			"codeAfter": "",
			"outgoingLinks": [
				72,
				75
			]
		}
	]
}
