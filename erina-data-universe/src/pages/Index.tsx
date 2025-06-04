
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Award, Code, Database, Cloud, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const ongoingProjects = [
    {
      title: "HopeNest - Laravel",
      description: "A Reddit-like community platform built with Laravel framework",
      link: "https://github.com/nrulerina/RedditClone",
      tech: ["Laravel", "PHP", "MySQL"],
      emoji: "🌐"
    },
    {
      title: "IBM HR Analytics Business Insights",
      description: "Advanced SQL analytics for HR business intelligence",
      tech: ["SQL", "Analytics"],
      emoji: "📊"
    }
  ];

  const recentProjects = [
    {
      title: "Azure End-to-End Project (Medallion Architecture)",
      description: "Complete data pipeline using Azure services with medallion architecture",
      link: "https://github.com/nrulerina/End-To-End-ADF",
      tech: ["Azure", "Data Pipeline", "ETL"],
      emoji: "🏭"
    },
    {
      title: "Pizza Sales Data Pipeline",
      description: "Data pipeline implementation using medallion architecture",
      link: "https://github.com/nrulerina/PizzaDataPipeline",
      tech: ["Python", "SQL", "Data Engineering"],
      emoji: "🧱"
    },
    {
      title: "Azure Data Factory - Parametrized Pipeline",
      description: "Advanced Azure Data Factory pipeline with parameterization",
      link: "https://github.com/nrulerina/adf",
      tech: ["Azure", "Data Factory"],
      emoji: "🏭"
    },
    {
      title: "Azure Data Factory - Mapping Data Flow",
      description: "Mini project implementing mapping data flows in ADF",
      link: "https://github.com/nrulerina/MappingDataFlow",
      tech: ["Azure", "Data Flow"],
      emoji: "🏭"
    },
    {
      title: "Exita Manufacturing ERP System",
      description: "Enterprise Resource Planning system built with SAP",
      link: "https://github.com/nrulerina/-ExitaManufacturing",
      tech: ["SAP", "ERP"],
      emoji: "🚀"
    },
    {
      title: "Netflix Content Insights",
      description: "Business intelligence analysis for Netflix content strategy",
      link: "https://github.com/nrulerina/Netflix_Insights",
      tech: ["SQL", "Business Intelligence"],
      emoji: "🎬"
    },
    {
      title: "NEmart Sales & Performance Analysis",
      description: "Comprehensive sales analysis dashboard using Power BI",
      link: "https://github.com/nrulerina/NEmart",
      tech: ["Power BI", "Analytics"],
      emoji: "🛒"
    },
    {
      title: "BikeShop Report",
      description: "Business analytics dashboard for bike shop performance",
      link: "https://github.com/nrulerina/BikeShopReport",
      tech: ["Power BI", "SQL"],
      emoji: "🚲"
    },
    {
      title: "Pizza Sales Report",
      description: "Sales performance dashboard for pizza business",
      link: "https://github.com/nrulerina/PizzaSalesReport",
      tech: ["Power BI", "SQL"],
      emoji: "🍕"
    },
    {
      title: "Car Booking System",
      description: "Web-based car booking and management system",
      link: "https://github.com/nrulerina/Car-Booking-System",
      tech: ["Web Development", "Database"],
      emoji: "🚗"
    },
    {
      title: "Library Management System",
      description: "Complete library management solution built in Java",
      link: "https://github.com/nrulerina/Library-Management-System",
      tech: ["Java", "Database"],
      emoji: "📖"
    },
    {
      title: "AKmaju Management System",
      description: "Business management system for AKmaju company",
      link: "https://github.com/nrulerina/AKmaju-System",
      tech: ["Web Development", "Database"],
      emoji: "🏢"
    }
  ];

  const skills = [
    { name: "Azure", color: "bg-blue-500", icon: Cloud },
    { name: "Snowflake", color: "bg-cyan-500", icon: Database },
    { name: "Databricks", color: "bg-red-500", icon: Database },
    { name: "SAP", color: "bg-blue-600", icon: Code },
    { name: "SQL Server", color: "bg-red-600", icon: Database },
    { name: "Google Cloud", color: "bg-blue-400", icon: Cloud },
    { name: "MySQL", color: "bg-blue-700", icon: Database },
    { name: "SQL", color: "bg-gray-600", icon: Database },
    { name: "Python", color: "bg-blue-400", icon: Code },
    { name: "Jupyter", color: "bg-orange-500", icon: Code },
    { name: "Tableau", color: "bg-orange-500", icon: Database },
    { name: "Alteryx", color: "bg-blue-800", icon: Database },
    { name: "Power BI", color: "bg-yellow-500", icon: Database },
    { name: "JavaScript", color: "bg-yellow-400", icon: Code },
    { name: "Java", color: "bg-orange-600", icon: Code },
    { name: "PHP", color: "bg-purple-500", icon: Code },
    { name: "Vue.js", color: "bg-green-500", icon: Code },
    { name: "CSS3", color: "bg-blue-500", icon: Code },
    { name: "R", color: "bg-blue-600", icon: Code },
    { name: "Laravel", color: "bg-red-500", icon: Code },
    { name: "Figma", color: "bg-purple-600", icon: Code },
    { name: "Firebase", color: "bg-yellow-600", icon: Database },
    { name: "C++", color: "bg-blue-700", icon: Code },
    { name: "Canva", color: "bg-cyan-400", icon: Code },
    { name: "Orange", color: "bg-orange-500", icon: Code },
    { name: "RapidMiner", color: "bg-orange-600", icon: Code }
  ];

  const certifications = [
    {
      title: "Udemy: Azure Data Factory For Data Engineers - Project on Covid19",
      issuer: "Udemy",
      link: "https://drive.google.com/file/d/1-2mbvX9IgrVKjLYbGgZZBKm-Qb8XHPRW/view?usp=sharing",
      icon: "🎖️"
    },
    {
      title: "Snowflake: Hands-On Essentials: Data Warehousing Workshop",
      issuer: "Snowflake",
      link: "https://achieve.snowflake.com/9bb94c08-83d5-46c8-9963-9c9cb5a12b46#acc.6ZnuElU1",
      icon: "🎖️"
    },
    {
      title: "Databricks: Databricks Fundamentals",
      issuer: "Databricks",
      link: "https://credentials.databricks.com/f5d38695-7d66-4627-bd9e-ce24a97d30af#acc.VKYrbk0x",
      icon: "🎖️"
    },
    {
      title: "Databricks: Azure Databricks Platform Architect",
      issuer: "Databricks",
      link: "https://credentials.databricks.com/f69ddfd5-4fab-41ee-99e9-f505a63173c5#acc.YP2CXvLU",
      icon: "🎖️"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      link: "https://www.credly.com/badges/70483906-fc22-40f3-a955-6b3fcad29109/linked_in_profile",
      icon: "🎖️"
    },
    {
      title: "HackerRank: SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/144b0af6c670",
      icon: "🎖️"
    },
    {
      title: "AWS Academy Graduate: AWS Academy Cloud Foundations",
      issuer: "AWS",
      link: "https://www.credly.com/badges/25489ffe-3983-4f78-b46f-00cfde114a7a/public_url",
      icon: "🎖️"
    },
    {
      title: "AWS Academy Graduate: AWS Academy Cloud Developing",
      issuer: "AWS",
      link: "https://www.credly.com/badges/8ba3d978-b297-4b63-b4cb-fb218da8acb2/public_url",
      icon: "🎖️"
    },
    {
      title: "AWS Academy Graduate: AWS Academy Cloud Data Pipeline Builder",
      issuer: "AWS",
      link: "https://www.credly.com/badges/8e3d92fe-aa39-476f-848b-ebd16832a6d0/public_url",
      icon: "🎖️"
    },
    {
      title: "IBM: Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      link: "https://www.credly.com/badges/4d7c69a8-8100-4de7-9594-8254baf9bb97/public_url",
      icon: "🎖️"
    },
    {
      title: "Alteryx: Designer Core Micro-Credential",
      issuer: "Alteryx",
      link: "https://drive.google.com/file/d/1-6w6Xb76aEu6zsv7I6cMW9AVWRm_Q-N2/view?usp=sharing",
      icon: "🎖️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section with Profile Picture */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="animate-fade-in">
              {/* Profile Picture Section */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <Avatar className="w-40 h-40 border-4 border-purple-400 shadow-2xl">
                    <AvatarImage 
                      src="/placeholder.svg" 
                      alt="Nurul Erina"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-purple-400 to-blue-400 text-white text-4xl font-bold">
                      <User size={60} />
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Hi there, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Nurul Erina</span> ✨
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Third-year Data Engineering student from Universiti Teknologi Malaysia
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  🗺️ English & Malay Speaker
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  👩🏻‍🎓 Data Engineering Student
                </Badge>
              </div>
            </div>
            
            {/* Stats Badges */}
            <div className="flex justify-center gap-4 mb-8 animate-scale-in">
              <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Foishylea%2Flearn-github&labelColor=%23d9e3f0&countColor=%23697689&style=flat" alt="Visitors" className="rounded-lg" />
              <img src="https://komarev.com/ghpvc/?username=nrulerina&color=blue&style=flat" alt="Profile Views" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ongoing Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <span className="text-2xl">{project.emoji}</span>
                    {project.title}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-blue-400 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <span className="text-xl">{project.emoji}</span>
                    <span className="text-sm">{project.title}</span>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-purple-400 text-purple-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 cursor-pointer">
                  <CardContent className="p-3 text-center">
                    <skill.icon className="w-6 h-6 mx-auto mb-2 text-white group-hover:text-yellow-400 transition-colors" />
                    <p className="text-white font-medium text-xs">{skill.name}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Certifications & Licenses
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 hover:bg-gray-700/30 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3 text-sm">
                    <Award className="text-yellow-400" size={20} />
                    <span className="flex-1">{cert.title}</span>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                      <ExternalLink size={16} />
                    </a>
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm">{cert.issuer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              GitHub Statistics
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=nrulerina&layout=compact&langs_count=10&hide=html,CSS&theme=radical" 
                alt="Top Languages" 
                className="mx-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=nrulerina&show_icons=true&theme=radical" 
                alt="GitHub Stats" 
                className="mx-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <img 
              src="https://github-profile-trophy.vercel.app/?username=nrulerina&theme=radical&no-frame=true&no-bg=true" 
              alt="GitHub Trophies" 
              className="mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Fun GIFs Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            <img 
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3ZvOXozdnNodGF5N3h2YzE0aTVtNXVnaW81NGxiZnI4MGo0MjhodCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2IudUHdI075HL02Pkk/giphy.gif" 
              alt="Coding Animation 1" 
              className="w-64 h-48 rounded-lg hover:scale-110 transition-transform duration-300"
            />
            <img 
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzZmb3I5N3FsNXhjcDd0bGNkbW9nbnc2bnI4M3pxZ28zMzVpamd1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rOdtJJS9Xf4TYx2aT8/giphy.gif" 
              alt="Coding Animation 2" 
              className="w-64 h-48 rounded-lg hover:scale-110 transition-transform duration-300"
            />
            <img 
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmQzb2IxOTVleDkzNWRtZjNqYmF4MDJpeXFwa21vanZ4YnRzZDQ1aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6ib6KPmkeAjDTxMxij/giphy.gif" 
              alt="Coding Animation 3" 
              className="w-64 h-48 rounded-lg hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900/80 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Nurul Erina. Built with ❤️ and code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
