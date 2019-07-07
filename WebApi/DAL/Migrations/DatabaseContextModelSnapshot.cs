﻿// <auto-generated />
using System;
using DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DAL.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DAL.Model.Auction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Account");

                    b.Property<string>("AddressFrom")
                        .HasMaxLength(500);

                    b.Property<string>("AddressTo")
                        .HasMaxLength(500);

                    b.Property<string>("ContactNumber")
                        .IsRequired();

                    b.Property<DateTime>("CreatedAt");

                    b.Property<DateTime>("DateFrom");

                    b.Property<DateTime>("DateTo");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<string>("DotpayLink")
                        .HasMaxLength(500);

                    b.Property<bool>("Featured");

                    b.Property<string>("Image");

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("PaypalLink")
                        .HasMaxLength(500);

                    b.Property<string>("SiepomagaLink")
                        .HasMaxLength(500);

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<DateTime>("UpdatedAt");

                    b.HasKey("Id");

                    b.ToTable("Auctions");
                });

            modelBuilder.Entity("DAL.Model.AuctionCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AuctionId");

                    b.Property<int>("CategoryId");

                    b.HasKey("Id");

                    b.HasIndex("AuctionId");

                    b.HasIndex("CategoryId");

                    b.ToTable("AuctionCategories");
                });

            modelBuilder.Entity("DAL.Model.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new { Id = 1, Name = "ŚRODKI NA LECZENIE" },
                        new { Id = 2, Name = "ŚRODKI NA NAPRAWY" },
                        new { Id = 3, Name = "POTRZEBNY TRANSPORT" },
                        new { Id = 4, Name = "POTRZEBNI LUDZIE" },
                        new { Id = 5, Name = "POMOC RZECZOWA" },
                        new { Id = 6, Name = "PILNIE POTRZEBNY DOM/DOM TYMCZASOWY" }
                    );
                });

            modelBuilder.Entity("DAL.Model.Notification", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AuctionId");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<int>("Status");

                    b.Property<Guid>("SubscriptionId");

                    b.Property<DateTime>("UpdatedAt");

                    b.HasKey("Id");

                    b.HasIndex("AuctionId");

                    b.HasIndex("SubscriptionId");

                    b.ToTable("Notifications");
                });

            modelBuilder.Entity("DAL.Model.Subscription", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConfirmationToken");

                    b.Property<bool>("Confirmed");

                    b.Property<string>("Contact");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<bool>("Subscribed");

                    b.Property<int>("SubscriptionType");

                    b.Property<DateTime>("UpdatedAt");

                    b.HasKey("Id");

                    b.ToTable("Subscription");
                });

            modelBuilder.Entity("DAL.Model.SubscriptionCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<Guid>("SubscriptionId");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("SubscriptionId");

                    b.ToTable("SubscriptionCategories");
                });

            modelBuilder.Entity("DAL.Model.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(20);

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("DAL.Model.AuctionCategory", b =>
                {
                    b.HasOne("DAL.Model.Auction", "Auction")
                        .WithMany("Categories")
                        .HasForeignKey("AuctionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DAL.Model.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DAL.Model.Notification", b =>
                {
                    b.HasOne("DAL.Model.Auction", "Auction")
                        .WithMany()
                        .HasForeignKey("AuctionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DAL.Model.Subscription", "Subscription")
                        .WithMany()
                        .HasForeignKey("SubscriptionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DAL.Model.SubscriptionCategory", b =>
                {
                    b.HasOne("DAL.Model.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DAL.Model.Subscription", "Subscription")
                        .WithMany("Categories")
                        .HasForeignKey("SubscriptionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
